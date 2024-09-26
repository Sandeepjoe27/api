import express from "express";

const router = express.Router();

//crud funtionality

//for reading
router.get('/',(req,res)=>{
    res.send("get all movie list");
});

//for creating
router.post('/',(req,res)=>{
    res.send("creates movie list");
});

//for updating
router.put('/:id',(req,res)=>{
    res.send("update movie list");
});

//for deleting
router.delete('/:id',(req,res)=>{
    res.send("delete movie list");
});


export default router;