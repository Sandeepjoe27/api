import express from "express";
import { MovieCreate, MovieDelete, MovieIndex, MovieUpdate } from "../controllers/movies.controller.js";

const router = express.Router();

//crud funtionality

//for reading
router.get('/', MovieIndex);

//for creating
router.post('/', MovieCreate);

//for updating
router.put('/:id', MovieUpdate);

//for deleting
router.delete('/:id', MovieDelete);


export default router;