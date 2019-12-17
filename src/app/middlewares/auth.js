import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  // Ausência do token
  if (!authorization) {
    return res.status(401).json({ error: 'Token nao autorizado' });
  }

  // Desestruturação de vetor (Bearer, ...token)
  const [, token] = authorization.split(' ');

  try {
    /**
     * É usado o promisify podemos usar o async/await
     * ao invés do velho callback do verify()
     */
    const { guid } = await promisify(jwt.verify)(token, authConfig.secret);

    // Incluir o userId dentro de todos os requires
    req.guid = guid;
  } catch (error) {
    return res.status(401).json({ error: 'Sessão invalida' });
  }
  return next();
};
