import {} from 'date-fns';
import uuidV1 from 'uuid/v1';
import bcrypt from 'bcryptjs';

import * as Yup from 'yup';

import User from '../schemas/User';

class SignUpController {
  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      senha: Yup.string()
        .required()
        .min(6),
      telefones: Yup.array().of(
        Yup.object().shape({
          numero: Yup.string().required(),
          ddd: Yup.string().required(),
        })
      ),
    });

    // Consistencia Inputs
    if (!(await schema.isValid(req.body))) {
      return res.json({ error: 'Falha na validação do formulário' });
    }

    const { nome, email, senha, telefones } = req.body;

    // Consistencia e-mail
    const existeEmail = await User.find({
      email,
    });

    if (existeEmail.length) {
      return res.json({ error: 'Email existente!' });
    }

    // Hash na senha
    const senha_hash = await bcrypt.hash(senha, 8);

    // GUID
    const guid = await uuidV1();

    await User.create({
      nome,
      email,
      senha: senha_hash,
      guid,
      telefones,
      ultimo_login: new Date(),
    });

    return res.json({ guid, nome, email, senha: senha_hash, telefones });
  }
}

export default new SignUpController();
