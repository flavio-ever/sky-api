import {} from 'date-fns';
import * as Yup from 'yup';

import Usuario from '../schemas/Usuario';

class SignUpController {
  async create(req, res) {
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

    const user = req.body;

    if (!(await schema.isValid(user))) {
      return res.json({ error: 'Falha na validação do formulário' });
    }

    const usuario = await Usuario.create([
      {
        ...user,
        data_criacao: new Date(),
        data_atualizacao: new Date(),
        ultimo_login: new Date(),
      },
    ]);

    return res.json(usuario);
  }
}

export default new SignUpController();
