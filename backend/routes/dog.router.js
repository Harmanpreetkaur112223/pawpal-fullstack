// const express = require('e
import express from 'express'
import { createDog, getAllDogs, updateDog, deleteDog, getDogDetails } from '../controllers/dog.controller.js'
const router = express.Router()

// admin
router.route('/new').post(createDog)
// user
router.route('/view').get(getAllDogs)
// admin
router.route('/:id').put(updateDog).delete(deleteDog).get(getDogDetails)

export default router