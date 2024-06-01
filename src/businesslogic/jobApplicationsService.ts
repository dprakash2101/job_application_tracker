import { JobApplication } from '../models/jobApplicationsModel';

class JobApplicationService {
  async createJobApplication(data: any) {
    const jobApplication = new JobApplication(data);
    return await jobApplication.save();
  }

  async getJobApplications() {
    return await JobApplication.find();
  }

  async getJobApplicationById(id: string) {
    return await JobApplication.findById(id);
  }

  async updateJobApplication(id: string, data: any) {
    return await JobApplication.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteJobApplication(id: string) {
    return await JobApplication.findByIdAndDelete(id);
  }
}

export const jobApplicationService = new JobApplicationService();
