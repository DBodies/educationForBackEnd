    import { Router } from 'express';
    import { deleteStudentController,
        updateStudentController, 
        postStudent, 
        getStudents, 
        requestGetById,
        upsertStudentController,} from '../controllers/controllers.ts';
        import { ctrlWrapper } from '../utils/ctrlWrapper.ts';
import { validateBody } from '../middlewares/validateBody.ts';
import { createStudentSchema } from '../validations/students.ts';
import { isValidId } from '../middlewares/isValidId.ts';
    

const router = Router()

router.get("/students", 
    ctrlWrapper(getStudents))

router.get("/students/:studentId",
    isValidId,
    ctrlWrapper(requestGetById))

router.post('/createStudent', 
validateBody(createStudentSchema) ,
ctrlWrapper(postStudent))

router.patch('/updateStudent/:studentId', 
validateBody(createStudentSchema) ,
ctrlWrapper(updateStudentController))

router.put('/putStudents/:studentId', 
validateBody(createStudentSchema) ,
ctrlWrapper(upsertStudentController))

router.delete('/deleteStudent/:studentId', ctrlWrapper(deleteStudentController))


export default router
