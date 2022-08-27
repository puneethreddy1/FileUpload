const express = require("express");
const User= require("../models/user");
const router = express.Router();


router.post("/register", async (req, res) => {
    const newuser = new User({ name: req.body.name,password: req.body.password })
    //console.log(newuser.password)
    User.findOne({ name: req.body.name }, async (err, doc) => {

        if (err) {
            console.log(err);
            return;
        } else {
            if (doc) {
                return res.status(500).send({ message: "email already exists" });
            } else {
                try {
                    const use = await newuser.save();
                    return res.send("successful registration");
                }
                catch (e) {
                    return res.status(400).send({ message: e });
                }
            }
        }
    })


})

router.post("/login", async (req, res) => {
    const { email, password } = req.body


    try {
        const user = await User.findOne({ email: email, password: password })
        if (user) {
            const temp = {
                name: user.name,
                _id: user._id
            }
            res.send(temp)
        }
        else {
            return res.status(400).json("login failed")
        }

    }
    catch (e) {
        return res.status(400).json({ message: e })

    }
});

router.post("/data",async (req,res)=>{
    
    const u_id=req.body.data.u_id;
    const data=req.body.data.data;
    const fname=req.body.data.fname;
    // const newdata=req.body.data.data;
    // const booking = await newdata.save();
    const dtemp = await User.findOne({ _id: u_id})

    //console.log(dtemp)
    //console.log(data);
    dtemp.data.push({
        fname:fname,    
        data:data
    })
    
    await dtemp.save();
    res.send("inserted");

});

router.post("/getalllists",async (req,res)=>{
    const u_id=req.body.data;
    console.log(u_id)
    try{
        const x=await User.findOne({_id:u_id});
    //console.log(typeof x.data)
    const names=[]
    for(let i of x.data){
        names.push({fname:i.fname,length:i.data.length})//also send creation time
    }
    //console.log(names)
    return res.json(names);}
    catch(e) {console.log(e)}
});
router.post("/gettable",async(req,res)=>{
    const u_id=req.body.data.u_id;
    const ind=req.body.data.ind;
    try{
    const x=await User.findOne({_id:u_id});
    var cnt=0;
    var ans={}
    //console.log(typeof x.data)
    for(let i of x.data){
        if(cnt==ind){
            //console.log(cnt)
            ans={...i};
            //console.log(i)
            break;
        }
        cnt++;
    }   
    return res.json(ans);}
    catch(e){console.log(e)
    return res.send("error");
    }
    
})




module.exports = router;