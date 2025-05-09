// const express = require('express');
import express from 'express'
import { createOrder, getMyOrderDetails, getAllOrderDetails, updateAOrder, deleteAnOrder }from '../controllers/order.controller.js';
const router = express.Router();

router.route('/new').post(createOrder)
router.route('/myOrder').get(getMyOrderDetails)
router.route('/getOrders').get(getAllOrderDetails)
router.route('/:id').put(updateAOrder).delete(deleteAnOrder)

// module.exports = router
export default router