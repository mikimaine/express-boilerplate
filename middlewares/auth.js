
exports.hasPermissions = (permissions) => (req, res, next)  => {
    const { user } = req
    const errors = []
    try {

        if(user) {
            if (typeof permissions === 'string'){
                permissions = [permissions]
            }
            permissions.forEach(permission => {
                if(!user.data.permissions.includes(permission)) {
                    errors.push(`You dont have ${permission} permission`)
                }
            });

            if(errors.length === 0 ) {
                return  next();
            }
            throw new Error('You dont have the correct privilege ')
        }
        // throw new Error('You dont have the correct privilege ')
      } catch(err) {
        // err
        console.log(err, 'err');
        res.status(401).json({
            error: true,
            message: errors
        })
      }
}


exports.nest = (i, i1 = null, link2 = 'parent') => {
    if(!Array.isArray(i)) {
        throw new TypeError('Items should be a valid array')
    }
     var result = (items, id = null, link = 'parent') => items
    .filter(item => item[link] === id)
    .map(item => ({
      ...item,
      text: item.name, value: item.id, children: result(items, item.id)
    }));

    return result(i, i1, link2)
} 