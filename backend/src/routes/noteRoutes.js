import express from "express";
import { getAllNotes  , createNotes , updateNotes , deleteNotes , getNoteById} from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);

router.get("/:id", getNoteById);

router.post("/", createNotes);

router.put("/:id", updateNotes);

router.delete("/:id",deleteNotes );

export default router;


/** 
app.get("api/notes", (res,req)=>{
    res.status(200).send("you got 20 notes");

});

app.post("api/notes", (res,req)=>{
    res.status(201).json({message:"post created successfully!"});

});


app.put("api/notes/:id", (res,req)=>{
    res.status(200).json({message:"post updated successfully!"})

});


app.delete("api/notes/:id", (res,req)=>{
    res.status(200).json({message:"post deleted successfully!"})

});

*/