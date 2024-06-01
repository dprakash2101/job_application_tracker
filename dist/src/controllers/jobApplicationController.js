"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobApplicationController = void 0;
const jobApplicationsService_1 = require("../businesslogic/jobApplicationsService");
class JobApplicationController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const jobApplication = yield jobApplicationsService_1.jobApplicationService.createJobApplication(req.body);
                res.status(201).json(jobApplication);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ error: error.message });
                }
                else {
                    res.status(500).json({ error: 'Unknown error occurred' });
                }
            }
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const jobApplications = yield jobApplicationsService_1.jobApplicationService.getJobApplications();
                res.status(200).json(jobApplications);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ error: error.message });
                }
                else {
                    res.status(500).json({ error: 'Unknown error occurred' });
                }
            }
        });
    }
    findById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const jobApplication = yield jobApplicationsService_1.jobApplicationService.getJobApplicationById(req.params.id);
                if (!jobApplication) {
                    return res.status(404).json({ message: 'Job Application not found' });
                }
                res.status(200).json(jobApplication);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ error: error.message });
                }
                else {
                    res.status(500).json({ error: 'Unknown error occurred' });
                }
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const jobApplication = yield jobApplicationsService_1.jobApplicationService.updateJobApplication(req.params.id, req.body);
                if (!jobApplication) {
                    return res.status(404).json({ message: 'Job Application not found' });
                }
                res.status(200).json(jobApplication);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ error: error.message });
                }
                else {
                    res.status(500).json({ error: 'Unknown error occurred' });
                }
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const jobApplication = yield jobApplicationsService_1.jobApplicationService.deleteJobApplication(req.params.id);
                if (!jobApplication) {
                    return res.status(404).json({ message: 'Job Application not found' });
                }
                res.status(200).json({ message: 'Job Application deleted' });
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ error: error.message });
                }
                else {
                    res.status(500).json({ error: 'Unknown error occurred' });
                }
            }
        });
    }
}
exports.jobApplicationController = new JobApplicationController();
