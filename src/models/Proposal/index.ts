import mongoose, { Document, Schema } from 'mongoose';

export interface IProposal extends Document {
  id: string;
  status: string;
  pr_link: string;
  approvals: number;
  file_name: string;
  team_name: string;
  branch_name: string;
  proposal_name: string;
  extrected_proposal_data: string;
  created_at: string;
}

const projectSchema: Schema<IProposal> = new Schema({
  id: { type: String, required: true, unique: true },
  status: { type: String },
  pr_link: { type: String, unique: true },
  approvals: { type: Number },
  file_name: { type: String },
  team_name: { type: String },
  branch_name: { type: String },
  proposal_name: { type: String },
  extrected_proposal_data: { type: String },
  created_at: { type: String }
});

const Proposal = mongoose.model<IProposal>('Proposal', projectSchema);
export default Proposal;
