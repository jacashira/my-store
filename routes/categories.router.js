const express = require('express')
const router = express.Router()

router.get('/categories/:categoryId/products/:productId',(req, res) => {
  const { categoryId, productId } = req.query
  res.json({
    categoryId,productId
  })

})

module.exports = router
