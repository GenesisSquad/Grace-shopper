function requireUser(req, res, next) {
	if (!req.user) {
		return res.status(400).send("You must be logged in to perform this action");
	}

	next();
}

function requireAdmin(req, res, next) {
	if (!req.user.isAdmin) {
		return res.status(400).send("You must be an Admin to perform this action");
	}

	next();
}

module.exports = {
	requireUser,
	requireAdmin,
};
