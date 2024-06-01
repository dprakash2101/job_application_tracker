"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const jobApplicationRouter_1 = __importDefault(require("./routes/jobApplicationRouter"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/jobApplicationsDB';
// Middleware
app.use(express_1.default.json());
// Routes
app.use('/api/job-applications', jobApplicationRouter_1.default);
// Database connection
mongoose_1.default.connect(dbURI, {})
    .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
})
    .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
});
