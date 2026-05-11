import {getStudents,getStudentById,welcome,addStudent} from '../StudentControllers.js'
import express from 'express'

const router = express.Router()

router.get('/students',getStudents)
router.get('/students/:id',getStudentById)
router.get('/welcome',welcome)
router.post('/students',addStudent)

export default router