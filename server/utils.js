function requireUser(req, res, next) {
	if (!req.user) {
		return res.status(400).send(
			"You must be logged in to perform this action"
		);
	}

	next();
}

module.exports = {
	requireUser,
};
