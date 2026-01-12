    import { Router } from 'express';
    import { deleteStudentController,
        updateStudentController, 
        postStudent, 
        getStudents, 
        requestGetById,
        upsertStudentController,} from '../controllers/controllers.ts';
        import { ctrlWrapper } from '../utils/ctrlWrapper.ts';
    

const router = Router()

router.get("/students", ctrlWrapper(getStudents))

router.get("/students/:studentId", ctrlWrapper(requestGetById))

router.post('/createStudent', ctrlWrapper(postStudent))

router.patch('/updateStudent/:studentId', ctrlWrapper(updateStudentController))

router.delete('/deleteStudent/:studentId', ctrlWrapper(deleteStudentController))

router.put('/putStudents/:studentId', ctrlWrapper(upsertStudentController))

export default router
