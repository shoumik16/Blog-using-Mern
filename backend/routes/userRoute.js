import {Router} from "express"
import {registerUser,loginUser,profile,logout} from '../controllers/userController.js'
//import {upload }from '../middlewares/multer.js'
//import {verifyjwt} from '../middlewares/auth.js'
const router =Router()

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/pro").get(profile)

router.route("/logout").post(logout)
            
export default router