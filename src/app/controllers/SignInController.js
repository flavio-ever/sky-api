import {} from 'date-fns';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import * as Yup from 'yup';
import authConfig from '../../config/auth';

import User from '../schemas/User';

class SignInController {
  async store(req, res) {
    // Consistencia dos inputs passados
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      senha: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.json({ error: 'Validation is fails' });
    }

    const { email, senha } = req.body;
    const user = await User.findOne({
      email,
    });

    if (!user) {
      return res.status(401).json({ error: 'Usuário não encontrado' });
    }

    if (!(await bcrypt.compare(senha, user.senha))) {
      return res.status(401).json({ error: 'Senha não confere' });
    }

    const { guid, name, telefones } = user;

    return res.json({
      user: {
        guid,
        name,
        email,
        telefones,
      },
      token: jwt.sign({ guid }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SignInController();
