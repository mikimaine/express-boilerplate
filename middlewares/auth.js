
var jwt = require('jsonwebtoken');

const { jwt_key } = require('../config/vars');


exports.passport = (permissions) => (req, res, next)  => {
    // check if user is signed in 
    // if(jwt({ secret: jwt_key, algorithms: ['HS256']}))
    try {
        if(!req.headers.authorization) {
            throw new Error('Authorization token invalid')
        }
        var decoded = jwt.verify(req.headers.authorization.split(' ').pop(), jwt_key);
        console.log(decoded, 'auth');
        req['state'] = { 
            user:  decoded
        }
        if(decoded.username) {
            // check for permissions
            // TODO Verify permission from db
            if(['view user'].includes(permissions[0])) {
                next()
            } else {
                throw new Error('You dont have the correct privilege ')
            }
           
        }
      } catch(err) {
        // err
        console.log(err, 'err');
        res.status(401).json({
            error: true,
            message: err.message
        })
      }
}

// exports.permissions  => {

// }
