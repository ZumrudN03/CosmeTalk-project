import express from 'express'

import multer from 'multer'
import { storage } from '../Middleware/multerStorage.js'
import { register } from '../controller/authController.js'
export const authRoute = express.Router()
const upload = multer({ storage: storage })

authRoute.post('/register',upload.single('profilePhoto'), register)