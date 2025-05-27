exports.authorize = (roles) => {
  return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
          return res.status(403).json({ error: "Forbidden: You don't have permission." });
      }
      next();
  };
};