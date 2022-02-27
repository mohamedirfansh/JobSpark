const { application } = require('express')
const express =require('express')
const router =express.Router()
const {getJob,setJob,updateJob,deleteJob } = require('../controllers/jobController')
const cors = require('cors')
router.route('/').post(setJob)
router.route('/:id').delete(deleteJob).put(updateJob)
const JobDatabase =require('../models/jobsmodel')


router.get('/',cors(),async(req,res)=>{
    searchparameters={}
    try{
        industryRequest=req.param("industry")
        if(!industryRequest){
            industryRequest={$nin:""}
        }else{
            industryRequest= new RegExp(industryRequest,'i')
        }

        titleRequest=req.param("title")
        if(!titleRequest){
            titleRequest={$nin:""}
        }
        else{
            newref= new RegExp(titleRequest,'i')
            titleRequest={$regex : newref}
        }
  
        searchparameters={industry : industryRequest,title    : titleRequest  }
        //console.log(searchparameters) 
        const jobinfo = await JobDatabase.find(searchparameters)   
        res.status(200).json(jobinfo)
    } catch(error){
        res.status(500)
        throw new Error('Job not found')
    }

})

module.exports=router

