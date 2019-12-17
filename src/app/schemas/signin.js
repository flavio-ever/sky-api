import mongoose from 'mongoose';

const SignInSchema = mongoose.Schema(
  {
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
    data_criacao: {
      type: Date,
      required: true,
    },
    data_atualizacao: {
      type: Date,
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

export default mongoose.model('SignIn', SignInSchema);
