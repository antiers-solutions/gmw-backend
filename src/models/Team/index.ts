import mongoose, { Document, Schema } from 'mongoose';

export interface ITeam extends Document {
  id: string;
  name: string;
  members: string[];
  projects: string[];
}

const teamSchema: Schema<ITeam> = new Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String },
  members: { type: [String] },
  projects: { type: [{ projectId: String, status: String }] }
});

const Team = mongoose.model<ITeam>('Team', teamSchema);

export default Team;
