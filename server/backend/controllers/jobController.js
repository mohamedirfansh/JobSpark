const asyncHandler =require('express-async-handler')

const JobDatabase =require('../models/jobsmodel')


const getJob = async(req,res)=>{
    searchparameters={}
    
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
  
    searchparameters={
        industry : industryRequest,
        title    : titleRequest
      }
    //console.log(searchparameters) 
    const jobinfo = await JobDatabase.find(searchparameters)   
    res.status(200).json(jobinfo)
}


const setJob = asyncHandler(async(req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    const jobnewentry = await JobDatabase.create({
        text: req.body.text
    })
    res.status(200).json(jobnewentry)
})


const updateJob = asyncHandler(async(req,res)=>{

    const jobdata =await JobDatabase.findById(req.params.id)


    if(!jobdata){
        res.status(400)
        throw new Error('Job not found')
    }

    const jobupdateinfo = await JobDatabase.findByIdAndUpdate(req.params.id, req.body,{
        new:true
    })


    res.status(200).json(jobupdateinfo)
})

const deleteJob = asyncHandler(async(req,res)=>{

    const jobToBeDeleted=await JobDatabase.findById(req.params.id)


    if(!jobToBeDeleted){
        res.status(400)
        throw new Error('Job not found')
    }

    await jobToBeDeleted.remove()

    res.status(200).json({id:req.params.id})
})

module.exports={
    getJob,setJob,updateJob,deleteJob
}