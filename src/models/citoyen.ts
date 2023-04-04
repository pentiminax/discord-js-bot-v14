import mongoose from 'mongoose';
import { ICitoyen } from '../types'; // Importez votre interface ici

const CitoyenSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: { type: String, required: true },
  discordId: { type: String, required: true, unique: true },
  avatarDiscord: { type: String },
  createdAt:  { type: Date, default: Date.now()} ,
  nickname: { type: String }
});

const Citoyen = mongoose.model<ICitoyen>('citoyen', CitoyenSchema); // Changez "Citoyen" en "citoyen"

export const createCitoyen = async (username: string, discordId: string, avatarDiscord?: string, nickname?: string): Promise<ICitoyen> => {
  const newCitoyen = {
    _id: new mongoose.Types.ObjectId(),
    username: username,
    discordId: discordId,
    avatarDiscord: avatarDiscord || null,
    nickname: nickname || null
  };
  const citoyen = new Citoyen(newCitoyen);
  return citoyen.save();
}

export default Citoyen;
