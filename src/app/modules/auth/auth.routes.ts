import { NextFunction, Request, Response, Router } from 'express';
import { authControllers } from './auth.controllers';
import validateRequest from '../../middlewares/validateRequest';
import { authValidation } from './authValidation';
import auth from '../../middlewares/auth';
import { USER_ROLE } from './auth.constant';
import { upload } from '../../utils/sendImageToCloudinary';

const router = Router();

//registration as student
router.post(
  '/register-as-student',
  validateRequest(authValidation.registerStudentValidationSchema),
  authControllers.registerStudent,
);

//change Profile Image
router.patch(
  '/changeProfileImg/:id',
  auth(USER_ROLE.student, USER_ROLE.tutor),
  validateRequest(authValidation.ImageValidationschema),
  authControllers.changeProfileImg,
);

//ragister as a tutor
router.post(
  '/register-as-tutor',
  validateRequest(authValidation.registerTutorValidationSchema),
  authControllers.registerasTutor,
);

//update tutor data
router.patch(
  '/update-as-tutor/:id',
  auth(USER_ROLE.tutor),
  validateRequest(authValidation.updateTutorValidationSchema),
  authControllers.updateTutor,
);

//login
router.post(
  '/login',
  validateRequest(authValidation.loginValidationschema),
  authControllers.loginUser,
);

export const authRoutes = router;
