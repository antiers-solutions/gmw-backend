import mongoose, { Document, Schema } from 'mongoose';

export interface IMilestoneProposal extends Document {
  id: string;
  pr_link: string;
  pr_number: number;
  status: string;
  file_name: string;
  user_github_details: object[];
  project_md_link: string;
  application_name: string;
  md_content_url: string;
  milestone_level: any;
  md_link: string;
  created_at: Date;
  updated_at: Date;
  // merged_at: string;
  reviewers: object;
  repos: any[];
  assignee_details: object[];
}

const milestoneProposalSchema: Schema<IMilestoneProposal> = new Schema({
  id: { type: String, required: true, unique: true },
  pr_link: { type: String },
  pr_number: { type: Number },
  status: { type: String },
  file_name: { type: String },
  user_github_details: { type: [Object] },
  project_md_link: { type: String },
  application_name: { type: String },
  md_content_url: { type: String },
  milestone_level: { type: Schema.Types.Mixed },
  md_link: { type: String },
  created_at: { type: Date },
  updated_at: { type: Date },
  // merged_at: { type: String },
  reviewers: { type: [Object] },
  repos: { type: [Object] },
  assignee_details: { type: [Object] }
});

const MilestoneProposal = mongoose.model<IMilestoneProposal>(
  'MilestoneProposal',
  milestoneProposalSchema
);

export default MilestoneProposal;
