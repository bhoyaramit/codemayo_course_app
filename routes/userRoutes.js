import express from 'express';
import { addToPlaylist,changePassword,deleteMyProfile,deleteUser,forgetPassword,getAllUsers,getMyProfile,login,logout,register,removeFromPlaylist,resetPassword,updateProfile,updateUserRole,updateprofilepicture} from '../controllers/userController.js';
import { isAuthenticated,authorizeAdmin } from '../middlewares/auth.js';
import singleUpload from '../middlewares/multer.js';

const router = express.Router();



router.route("/register").post(singleUpload,register);
router.route("/login").post(login);
router.route("/logout").post(logout);



router.route("/me").get( isAuthenticated, getMyProfile );
router.route("/changepassword").put( isAuthenticated, changePassword );
router.route("/updateprofile").put( isAuthenticated, updateProfile );
router.route("/updateprofilepicture").put( isAuthenticated, singleUpload, updateprofilepicture );



router.route("/forgetpassword").post( forgetPassword );
router.route("/resetpassword/:token").put( resetPassword );



router.route("/addtoplaylist").post(isAuthenticated, addToPlaylist);
router.route("/removefromplaylist").delete(isAuthenticated, removeFromPlaylist);



////  Admin  Routes  ////



router.route("/admin/users").get( isAuthenticated, authorizeAdmin, getAllUsers );



router.route("/admin/user/:id").put( isAuthenticated, authorizeAdmin, updateUserRole )
                               .delete( isAuthenticated, authorizeAdmin, deleteUser );


                               
router.route("/me").delete( isAuthenticated, deleteMyProfile );



export default router;