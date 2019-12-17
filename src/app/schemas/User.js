import mongoose from 'mongoose';

const UserSchema = mongoose.Schema(
  {
    guid: {
      type: String,
      unique: true,
    },
    nome: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    senha: {
      type: String,
      required: true,
    },
    telefones: {
      type: Array,
    },
    ultimo_login: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('User', UserSchema);
