import mongoose, { Document, Schema } from 'mongoose';

export interface IProposal extends Document {
  id: string;
  repos: string[];
  status: string;
  pr_link: string;
  md_link: string;
  assignees: string[];
  team_name: string;
  reviewers: string[];
  file_name: string;
  created_at: string;
  updated_at: string;
  proposal_name: string;
  milestones: object[];
  user_github_details: string[];
  extrected_proposal_data: string;
}

const projectSchema: Schema<IProposal> = new Schema({
  id: { type: String, required: true, unique: true },
  status: { type: String },
  repos: { type: [String] },
  md_link: { type: String },
  team_name: { type: String },
  file_name: { type: String },
  created_at: { type: String },
  updated_at: { type: String },
  proposal_name: { type: String },
  milestones: { type: [Object] },
  pr_link: { type: String, unique: true },
  extrected_proposal_data: { type: String },
  assignees: {
    type: [
      { git_user_id: String, git_user_name: String, git_avatar_url: String }
    ]
  },
  user_github_details: {
    type: [
      { git_user_id: String, git_user_name: String, git_avatar_url: String }
    ]
  },
  reviewers: {
    type: [
      {
        reviewer_user_name: String,
        reviewer_id: String,
        reviewer_avatar_url: String
      }
    ]
  }
});

const Proposal = mongoose.model<IProposal>('Proposal', projectSchema);
export default Proposal;
