const { application } = require('express')
const express =require('express')
const router =express.Router()
const {getJob,setJob,updateJob,deleteJob } = require('../controllers/jobController')

router.route('/').get(getJob).post(setJob)
router.route('/:id').delete(deleteJob).put(updateJob)

module.exports=router

