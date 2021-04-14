const express = require("express");
const usersRouter = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { requireUser } = require("./utils");
const { createUser, getUserByUsername, getUser, getAllUsers, getCartByUser } = require("../db");
const { JWT_SECRET } = process.env;

usersRouter.post("/register", async (req, res, next) => {
	try {
		const {
			username,
			password,
			firstName,
			lastName,
			email,
		} = req.body;
		if (!username || !password) {
			return res
				.status(400)
				.send("please enter both a username and a password");
		}
		if (password.length < 8) {
			return res
				.status(400)
				.send("please enter a password at least 8 characters long");
		}

		const _user = await getUserByUsername(username);
		if (_user) {
			return res.status(400).send("A user by that username already exists");
		}
		const user = await createUser({
			username,
			password,
			firstName,
			lastName,
			email
		});
		if (user && user.username) {
			const token = jwt.sign(
				{
					id: user.id,
					username,
				},
				JWT_SECRET
			);
			res.send({
				user,
				message: "thank you for signing up",
				token,
			});
		} else {
			console.log("duplicate username found");
			return next({
				message: "A user by that username already exists",
			});
		}
	} catch (error) {
		console.error(error);
		next(error);
	}
});

usersRouter.post("/login", async (req, res, next) => {
	const { username, password } = req.body;

	// request must have both
	if (!username || !password) {
		next({
			name: "MissingCredentialsError",
			message: "Please supply both a username and password",
		});
	}

	try {
		const user = await getUser({ username, password });

		if (user) {
			// create token & return to user
			const _user = await getUserByUsername(username);
			_user["token"] = jwt.sign(
				{ id: _user.id, username: _user.username },
				JWT_SECRET
			);
			res.send({ message: "you're logged in!", token: _user.token, _user });
		} else {
			next({
				name: "IncorrectCredentialsError",
				message: "Username or password is incorrect",
			});
		}
	} catch (error) {
		console.error(error);
		next(error);
	}
});


usersRouter.get("/me", requireUser, async (req, res, next) => {
	try {
		const { user } = req;
		if (!user) return res.status(400).send("no token");
		// console.log(user);
		return res.send(req.user);
	} catch (error) {
		next(error);
	}
});

usersRouter.get('/',
// requireAdmin,
async (req, res, next) => {
try {
	return res.send(await getAllUsers())
} catch (error) {
	next(error);
}
})

//logged in user and owner of object
usersRouter.get("/:userId/orders", requireUser, async (req, res, next) => {
    try {
        const { userId } = req.params;
        if ( userId ) return res.status(400).send("Not authorized to edit cart.") 
        return res.send(await getCartByUser(id));

    } catch (error) {
        console.error(error);
    }
});

module.exports = {
	usersRouter
}