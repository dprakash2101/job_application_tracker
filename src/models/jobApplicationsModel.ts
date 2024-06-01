// models/jobApplicationsModel.ts

import { Schema, model, Document } from 'mongoose';

interface IJobApplication extends Document {
  roleName: string;
  companyName: string;
  jobLocation: string;
  jobType: string;
  jobDescription: string;
  knownJobThrough: string; // Corrected spelling
  appliedOn: Date;
  emailUsed: string;
  status: boolean;
  statusReason: string;
  note?: string;
  selectedForInterview?: boolean;
  interviews: [
    {
      round: number;
      interviewType: string;
      date: Date;
      status: string;
      notes: string;
    }
  ];

  offers: [
    {
      companyName: string;
      package: string;
      role: string;
      jobLocation: string;
      dateOfOffer: Date;
      status: string;
      notes: string;
      joiningDate?: Date; // Optional joining date
      selectedOffer?: boolean;
    }
  ];
}

const JobApplicationSchema = new Schema<IJobApplication>({
  roleName: { type: String, required: true },
  companyName: { type: String, required: true },
  jobLocation: { type: String, required: true },
  jobType: { type: String, required: true },
  jobDescription: { type: String, required: true },
  knownJobThrough: { type: String, required: true }, // Corrected spelling
  appliedOn: { type: Date, required: true },
  emailUsed: { type: String, required: true },
  status: { type: Boolean, required: true },
  statusReason: { type: String, required: true },
  note: { type: String },
  selectedForInterview: { type: Boolean },
  interviews: [
    {
      round: { type: Number, required: true },
      interviewType: { type: String, required: true },
      date: { type: Date, required: true },
      status: { type: String, required: true },
      notes: { type: String }
    }
  ],

  offers: [
    {
      companyName: { type: String, required: true },
      package: { type: String, required: true },
      role: { type: String, required: true },
      jobLocation: { type: String, required: true },
      dateOfOffer: { type: Date, required: true },
      status: { type: String, required: true },
      notes: { type: String },
      joiningDate: { type: Date }, // Optional joining date
      selectedOffer: { type: Boolean }
    }
  ]
});

const JobApplication = model<IJobApplication>('JobApplication', JobApplicationSchema);

export { JobApplication, IJobApplication };
