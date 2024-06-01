"use strict";
// models/jobApplicationsModel.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobApplication = void 0;
const mongoose_1 = require("mongoose");
const JobApplicationSchema = new mongoose_1.Schema({
    roleName: { type: String, required: true },
    companyName: { type: String, required: true },
    jobLocation: { type: String, required: true },
    jobType: { type: String, required: true },
    jobDescription: { type: String, required: true },
    knownJobThrough: { type: String, required: true },
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
            joiningDate: { type: Date },
            selectedOffer: { type: Boolean }
        }
    ]
});
const JobApplication = (0, mongoose_1.model)('JobApplication', JobApplicationSchema);
exports.JobApplication = JobApplication;
