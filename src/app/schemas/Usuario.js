import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UsuarioSchema = mongoose.Schema(
  {
    guid: {
      type: String,
      required: true,
    },
    nome: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    senha: {
      type: String,
      required: true,
    },
    telefones: {
      type: Array,
      required: true,
    },
    ultimo_login: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Usuario', UsuarioSchema);
