const router = require('express').Router()
const {Order, OrderItem} = require('../db/models')
const {isLoggedIn, isRightUser, hasRightToAccessOrder} = require('./utils')
module.exports = router

router.put('/', isLoggedIn, hasRightToAccessOrder, async (req, res, next) => {
  try {
      const price = Number(req.body.orderInfo.price)
      const quantity = Number(req.body.orderInfo.quantity)
      const productId = Number(req.body.orderInfo.productId)
      const orderId = Number(req.body.orderInfo.orderId)

      let orderInfo = {price, quantity, productId, orderId}

      const oldOrderItem = await OrderItem.findOne({
        where: {productId, orderId}
      })
      if (!oldOrderItem) {
        const newOrderItem = await OrderItem.create(orderInfo)
      }
      res.json()
  } catch (err) {
    next(err)
  }
})

router.get('/:userId', isLoggedIn, isRightUser, async (req, res, next) => {
  try {
    const userId = req.params.userId
    let currentOrder = await Order.findOne({where: {userId, status: 'cart'}})
    res.json(currentOrder)
  } catch (err) {
    next(err)
  }
})

router.put(
  '/remove',
  isLoggedIn,
  hasRightToAccessOrder,
  async (req, res, next) => {
    try {
      let orderId = req.body.orderId
      let productId = req.body.productId
      await OrderItem.destroy({where: {orderId, productId}})
      res.status(204).end()
    } catch (err) {
      next(err)
    }
  }
)
