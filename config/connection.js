const mongoClient=require('mongodb').MongoClient
const state={
    db:null
}
module.exports.connect=function(done){
    const url= "mongodb://localhost:27017/myProject"
    const dbname='shopping'

    mongoClient.connect(url, { useNewUrlParser: true },(err,data)=>{
        if(err) return done(err)
        else{
        state.db=data.db(dbname)
        }

       

    })
    done()
}
module.exports.get=function(){
      return state.db  
}