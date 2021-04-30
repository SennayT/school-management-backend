const middleware = (schema, property = "body") => {
  return (req, res, next) => {
    const { error } = schema.validate(req[property]);
    if (error == null) {
      next();
    } else {
      const { details } = error;
      const message = details.map((i) => i.message).join(", ");
      console.error("Error", message);
      return res.status(422).json({ error: message });
    }
  };
};

module.exports = middleware;
