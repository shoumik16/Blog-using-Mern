import {Router} from "express"
import {registerUser,loginUser,profile,logout,newpost,setpost} from '../controllers/userController.js'
import {upload }from '../middlewares/multer.js'
//import {verifyjwt} from '../middlewares/auth.js'
const router =Router()

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/pro").get(profile)

router.route("/posts").post(upload.single("file"),newpost)
router.route("/posts").get(setpost)
router.route("/logout").post(logout)
            
export default router