const validateBody = (req, res, next) => {
  const { body, method } = req;
  if (method === "PUT" && body.status === "") {
    return res.status(400).json({ message: "Status connot be empty" });
  }
  if (method === "PUT" && body.status === undefined) {
    return res.status(400).json({ message: "The field status is required" });
  }

  if (body.title === undefined) {
    return res.status(400).json({ message: "The field title is required" });
  }

  if (body.title === "") {
    return res.status(400).json({ message: "Title cannot be empty" });
  }

  next();
};

module.exports = { validateBody };
