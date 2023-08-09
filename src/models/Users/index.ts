import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  id: string;
  git_id: string;
  name: string;
  git_url: string;
  image_url: string;
  role: string;
  site_admin: string;
}

const teamSchema: Schema<IUser> = new Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String },
  git_id: { type: String },
  git_url: { type: String },
  image_url: { type: String },
  role: { type: String },
  site_admin: { type: String }
});

const User = mongoose.model<IUser>('User', teamSchema);

export default User;
