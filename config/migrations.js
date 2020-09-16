const permissions = [
    'create user',
    'view any user',
    'view user',
    'update user',
    'remove user',

    'create role',
    'view any role',
    'view role',
    'update role',
    'remove role',

    'create profile',
    'update profile',
    'sample'
]

const roles = {
    admin: [...permissions],
    user: []
}

const users = [
    {
        username: 'admin',
        email: 'super@admin.com',
        password: 'superuser',
        roles: ['admin']
    }
]

module.exports = { permissions, roles, users }
