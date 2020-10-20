const router = require('express').Router()
const schem = require('../mongoose/schema')

router.post('/',async (req,res)=>{
    //console.log(req.body)
    const sch = await new schem(req.body)
    await sch.save()
    //res.json({"msg":"success"})
})

router.get('/',async (req,res)=>{
    try{
        
        const x = await schem.find()
        
        res.json(x)
    }
    catch(err)
    {
        res.send(err)
    }
})

router.put('/:id',async (req,res)=>{
    console.log(req.body)
    const data = await schem.findByIdAndUpdate(req.params.id,req.body)
    data.save()
    //res.send("success")
})

router.delete('/:id', async (req,res)=>{
    const data = await schem.findByIdAndDelete(req.params.id)
    //res.send("success")
})



module.exports = router