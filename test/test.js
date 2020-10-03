
const assert = require('assert');
const { exception } = require('console');
const { token } = require('morgan');
const expect = require('chai').expect
const request = require('supertest');

const app = require('../app')

const { nest }  = require('../middlewares/auth')

var a = 1

var badFn = function () { throw new TypeError('Illegal salmon!'); };


console.log(typeof nest, 'nest');

  // console.log(result)
describe('VariableOrArray', function () {
  describe('#equality', function () {
    it('should return true when the value is equal', function () {
      assert.strictEqual(a, 1);
    });

    it('should return false when the value is not equal', function () {
      assert.notStrictEqual(a, 2);
    });
  });

  describe('#NestAnArray', function () {
    let value = [
      {
        name: 'parent one',
        id: 1,
        parent: null
      },
      {
        name: 'parent two',
        id: 2,
        parent: null
      },
      {
        name: 'child one',
        id: 3,
        parent: 1
      },
      ,
      {
        name: 'child two',
        id: 4,
        parent: 1
      }
    ]

    
    it('Have to be type of array', function () {
      expect(nest(value)).to.be.an('array');
    })

    it('It should fail if non Array is provided', function () {
     expect(nest).to.throw(TypeError);
    })

    it('It should return empty array', function () {
      expect(nest([]).length).eql(0)
    })

    it('should return nested array with parent-child node', function () {
     
      let result = [
        {
          name: 'parent one',
          id: 1,
          parent: null,
          text: 'parent one',
          value: 1,
          children: [
            {
              name: 'child one',
              id: 3,
              parent: 1,
              text: 'child one',
              value: 3,
              children: []
            },
            {
              name: 'child two',
              id: 4,
              parent: 1,
              text: 'child two',
              value: 4,
              children: []
            }
          ]
        },
        {
          name: 'parent two',
          id: 2,
          parent: null,
          text: 'parent two',
          value: 2,
          children: []
        }
        
      ]  

      assert.deepEqual(nest(value), result);
    });
  })


});

describe('Test Route and controller', function () {
  it('If we send Login with empty body should return bad request', function() {
     return request(app)
    .post('/auth/login')
    .expect(400)
    
  })

  it('If send with invalid username/password should return 401', function() {
    return request(app)
   .post('/auth/login')
   .send({
    "username": "invalid user ",
    "password": "invalid password"
    })
   .expect(400)
 })

 it('If send with valid username/password should return 200 wit valid object', function() {
  let user = {
    "username": "admin",
    "password": "superuser"
    }
  return request(app)
 .post('/auth/login')
 .send(user)
 .expect(200)
 .then((res) => {
   const {username, active, token} = res.body

   expect(username).to.be.equal(user.username)
   expect(active).to.be.equal(true)
   expect(token).to.exist
 })
})
 
})



describe('Test auth', function () {
  let token;
  let user;

  beforeEach(async () => {
    let user = {
      "username": "admin",
      "password": "superuser"
      }
    let res = await request(app)
    .post('/auth/login')
    .send(user)
    
      user = res.body
      token = user.token
      
   
  })
  // test requires token

  describe('some test', function () {
    it('get logged in user', function () {
      return request(app)
        .get('/users')
        .set('Authorization', `Bearer ${token}`)
        .expect(200)
        .then((res) => {
          console.log(res);
        });
    })
  })

})

// faker
// Mocking 