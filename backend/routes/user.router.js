import express from 'express'
// import { registerUser, LoginUser, logoutUser, viewMyProfile, viewAllUsers, viewAUser, forgotPassword, updateUserProfile, deleteUserProfile } from '../controllers/user.controller.js'
import { registerUser,LoginUser,logoutUser,viewAUser,viewAllUsers,viewMyProfile } from '../controllers/User.controller.js'
const router = express.Router()

// admin
router.route('/register').post(registerUser)
router.route('/login').post(LoginUser)
router.route('/logout').get(logoutUser)
router.route('/me').get(viewMyProfile)
router.route('/allUsers').get(viewAllUsers)
export default router