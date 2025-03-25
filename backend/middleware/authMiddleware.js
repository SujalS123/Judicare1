const requireJudge = (req, res, next) => {
  // Check if user is authenticated and is a judge
  if (!req.user || req.user.userType !== 'judge') {
    return res.status(403).json({ message: 'Access denied. Judge role required.' });
  }
  next();
};

module.exports = { requireJudge }; 