import mongoose, { Document, Schema } from 'mongoose';

export interface IProposal extends Document {
  id: string;
  repos: string[];
  status: string;
  pr_link: string;
  md_link: string;
  assignees: string[];
  team_name: string;
  approvals: number;
  file_name: string;
  created_at: string;
  updated_at: string;
  proposal_name: string;
  user_github_details: string[];
  extrected_proposal_data: string;
}

const projectSchema: Schema<IProposal> = new Schema({
  id: { type: String, required: true, unique: true },
  status: { type: String },
  repos: { type: [String] },
  md_link: { type: String },
  team_name: { type: String },
  approvals: { type: Number },
  file_name: { type: String },
  created_at: { type: String },
  updated_at: { type: String },
  proposal_name: { type: String },
  pr_link: { type: String, unique: true },
  extrected_proposal_data: { type: String },
  assignees: { type: [{ id: Number, login: String }] },
  user_github_details: { type: [{ id: Number, login: String }] }
});

const Proposal = mongoose.model<IProposal>('Proposal', projectSchema);
export default Proposal;
