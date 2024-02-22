const jwt = require('jsonwebtoken')
const db = require('../models/db')
const {getUserById} = require('../services/customer.service');

module.exports = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization
    if( !authorization ) {
      throw new Error('Unauthorized')
    }
    if(!(authorization.startsWith('Bearer '))) {
      throw new Error('Unauthorized')
    }
    const token = authorization.split(' ')[1]
    const payload = jwt.verify(token,process.env.JWT_SECRET)
    // console.log("payload", payload)
    
    const user = await db.customer.findUnique({
      where: {
        id: payload.id,
      },
      select: {
        id: true,
        password: true
      }
    });
    delete user.password
    console.log(user)
    req.user = user  
    next()
    
  }catch(err) {
    next(err)
  }

}