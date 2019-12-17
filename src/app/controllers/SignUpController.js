class SignUpController {
  async create(req, res) {
    const user = req.body;
    res.json(user);
  }
}

export default new SignUpController();
