import {} from 'date-fns';

import * as Yup from 'yup';

import User from '../schemas/User';

class SessionController {
  async store(req, res) {
    return res.json(true);
  }
}

export default new SessionController();
