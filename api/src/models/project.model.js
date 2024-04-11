import mongoose, { Schema } from 'mongoose';

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  feature: {
    type: String,
    required: true,
  },
  projectImages: {
    type: [String],
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["full-stack", "mern-stack", "frontend", "backend"],
  },
  frontendStack: {
    type: [String],
    required: true,
  },
  backendStack: {
    type: [String],
    required: true,
  },
  sourceCode: {
    type: String,
    required: true,
  },
  liveWebsiteLink: {
    type: String,
    required: true,
  },
}, { timestamps: true });

export const Project = mongoose.model('Project', projectSchema);
