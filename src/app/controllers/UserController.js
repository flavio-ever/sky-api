import User from '../schemas/User';

class UserController {
  async show(req, res) {
    const { guid, nome, email, telefones, uiltimo_login } = await User.findOne({
      guid: req.guid,
    });
    return res.json({ guid, nome, email, telefones, uiltimo_login });
  }
}

export default new UserController();
