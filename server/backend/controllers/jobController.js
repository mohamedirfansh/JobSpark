const asyncHandler =require('express-async-handler')

const getGoal = asyncHandler(async(req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message:'Get Jobs'})
})


const setGoal = asyncHandler(async(req,res)=>{

    res.status(200).json({message:"Set Jobs"})
})


const updateGoal = asyncHandler(async(req,res)=>{
    res.status(200).json({message:`Update Jobs ${req.params.id}`})
})

const deleteGoal = asyncHandler(async(req,res)=>{
    res.status(200).json({message:`Delete Jobs ${req.params.id}`})
})

module.exports={
    getGoal,setGoal,updateGoal,deleteGoal
}