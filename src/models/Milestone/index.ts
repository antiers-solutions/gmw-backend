import mongoose, { Document, Schema } from 'mongoose';

export interface IMilestone extends Document {
  id: string;
  file_name: string;
  project_id: string;
  user_github_id: string;
  user_github_details: [];
  project_md_link: string;
  md_content: string;
  md_content_url: string;
  status: string;
  cost: string;
  milestoneNo: number;
  merged_at: string;
}

const milestoneSchema: Schema<IMilestone> = new Schema({
  id: { type: String, required: true, unique: true },
  file_name: { type: String },
  project_id: { type: String },
  user_github_id: { type: String },
  user_github_details: { type: [] },
  project_md_link: { type: String },
  md_content: { type: String },
  md_content_url: { type: String },
  status: { type: String },
  cost: { type: String },
  milestoneNo: { type: Number },
  merged_at: { type: String }
});

const Milestone = mongoose.model<IMilestone>('Milestone', milestoneSchema);

export default Milestone;
