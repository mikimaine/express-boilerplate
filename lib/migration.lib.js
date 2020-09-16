
var { permissions, roles, users } = require('../config/migrations')
const logger = require('../config/logger');

const permissionModel = require('../models/permission-model')

module.exports = {
    
    migratePermissions: () => {
        console.log(permissions, 'test..');
        logger.info(`Checking permissions migrations...`);

        // retrieve all permissions from db
        
        permissionModel.find({}).then(data => {
            let permissionDocument = data
            if(permissions.length > permissionDocument.length) {
                logger.info(`Found new permissions...`);
                // some operation
                permissions = permissions.filter(per => {
                    return permissionDocument.findIndex(val => val.name === per) === -1
                })
                permissionModel.insertMany([
                    ...permissions.map(val => ({name: val}))
                ]).then(() =>{
                    logger.info(`migrate permission completed ...`);
                    
                })
                return;
                
            }
            logger.info(`Noting to migrate fro permission ...`);
        })
    },

    migrateRoles: () => {
        logger.info(`Checking permissions migrations...`);

        Object.keys(roles).forEach(index => {
            // count if role exists
            let roleDocumentCount = 0

            if(roleDocumentCount === 0) {
                logger.info(`Found new role...`);
                // create role
                let saveRole = {
                    name: index,
                    permissions: []
                } 

            }


        })
        logger.info(`completed roles migrations...`);
    },

    migrateUsers: () => {
        logger.info(`Checking users migrations...`);

        users.forEach(user => {
            // count if user exists
            let userDocumentCount = 0
            if(userDocumentCount === 0) {
                // create the user  -->
            }
        })
        logger.info(`completed users migrations...`);
    }
}