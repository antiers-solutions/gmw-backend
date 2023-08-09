import mongoose, { Document, Schema } from 'mongoose';

export interface IProject extends Document {
  id: string;
  user_github_id: string;
  file_name: string;
  start_date: Date;
  payment_details: string;
  md_content: string;
  md_link: string;
  html_url: string;
  project_name: string;
  status: string;
  total_cost: { amount: string; currency: string };
  total_duration: string;
  team_id: string;
  level: string;
  legal_structure?: {
    registered_address: string;
    registered_legal_entity: string;
  };
  milestones: string[];
  totalMilestones: number;
}

const projectSchema: Schema<IProject> = new Schema({
  id: { type: String, required: true, unique: true },
  user_github_id: { type: String },
  file_name: { type: String, unique: true },
  start_date: { type: Date, default: Date.now },
  html_url: { type: String },
  payment_details: { type: String },
  md_content: { type: String },
  md_link: { type: String },
  project_name: { type: String },
  status: { type: String },
  total_cost: { type: Schema.Types.Mixed },
  total_duration: { type: String },
  team_id: { type: String },
  level: { type: String },
  legal_structure: { type: Schema.Types.Mixed },
  milestones: { type: [String] },
  totalMilestones: { type: Number }
});

const Project = mongoose.model<IProject>('Project', projectSchema);

export default Project;
