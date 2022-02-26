const { application } = require('express')
const express =require('express')
const router =express.Router()
const { getGoal,setGoal,updateGoal,deleteGoal } = require('../controllers/jobController')

router.route('/').get(getGoal).post(setGoal)
router.route('/:id').delete(deleteGoal).put(updateGoal)

module.exports=router

