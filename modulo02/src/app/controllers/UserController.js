import User from '../models/User';

class UseController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });
    if (userExists) {
      return res.status(400).json({ error: 'User alredy exists' });
    }
    //Retornando os campos necessarios:
    const { id, name, email, provider } = await User.create(req.body, {});
    return res.json({
      id,
      name,
      email,
      provider,
    });
  }

  async update(req, res) {
    return res.json;
  }
}

export default new UseController();
