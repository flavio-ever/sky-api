import {} from 'date-fns';
import Usuario from '../schemas/Usuario';

class SignUpController {
  async create(req, res) {
    const user = req.body;

    const usuario = await Usuario.create([
      {
        ...user,
        data_criacao: new Date(),
        data_atualizacao: new Date(),
        ultimo_login: new Date(),
      },
    ]);

    res.json(usuario);
  }
}

export default new SignUpController();
