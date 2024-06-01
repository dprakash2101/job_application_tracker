import { Request, Response } from 'express';
import { jobApplicationService } from '../businesslogic/jobApplicationsService';

class JobApplicationController {
  async create(req: Request, res: Response) {
    try {
      const jobApplication = await jobApplicationService.createJobApplication(req.body);
      res.status(201).json(jobApplication);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Unknown error occurred' });
      }
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const jobApplications = await jobApplicationService.getJobApplications();
      res.status(200).json(jobApplications);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Unknown error occurred' });
      }
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const jobApplication = await jobApplicationService.getJobApplicationById(req.params.id);
      if (!jobApplication) {
        return res.status(404).json({ message: 'Job Application not found' });
      }
      res.status(200).json(jobApplication);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Unknown error occurred' });
      }
    }
  }

  async update(req: Request, res: Response) {
    try {
      const jobApplication = await jobApplicationService.updateJobApplication(req.params.id, req.body);
      if (!jobApplication) {
        return res.status(404).json({ message: 'Job Application not found' });
      }
      res.status(200).json(jobApplication);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Unknown error occurred' });
      }
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const jobApplication = await jobApplicationService.deleteJobApplication(req.params.id);
      if (!jobApplication) {
        return res.status(404).json({ message: 'Job Application not found' });
      }
      res.status(200).json({ message: 'Job Application deleted' });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Unknown error occurred' });
      }
    }
  }
}

export const jobApplicationController = new JobApplicationController();
