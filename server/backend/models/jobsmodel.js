const mongoose=require('mongoose')

const jobSchema =mongoose.Schema({
    locations:{
        type: String,
    },
    site:{
        type: String,
    },
    date:{
        type: String,
    },
    url:{
        type: String,
    },
    title:{
        type: String,
    },
    description:{
        type: String,
    },
    company:{
        type: String,
    },
    salary:{
        type: String,
    },
    industry:{
        type: String,
    },
    
},
{ collection : 'Junior' }
)

module.exports=mongoose.model('Job',jobSchema)
