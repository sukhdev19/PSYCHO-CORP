import express from 'express';
import { loginAdmin, appointmentsAdmin, appointmentCancel, addDoctor, allDoctors, adminDashboard } from '../controllers/adminController.js';
import { changeAvailablity } from '../controllers/doctorController.js';
import authAdmin from '../middleware/authAdmin.js';
import upload from '../middleware/multer.js';
import chatbotReply from '../controllers/chatbotController.js';
const chatbotRouter = express.Router();

chatbotRouter.post("/", chatbotReply);

export default chatbotRouter;