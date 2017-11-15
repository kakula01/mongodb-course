const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const {ObjectId} = require('mongodb');

const todos =[{
    _id: new ObjectId,
    text:'first text'
  },{
    _id: new ObjectId,
    text:'second text'
  }]

beforeEach((done) => {
  Todo.remove({}).then(()=>{
    return Todo.insertMany(todos)
  }).then(()=> done());
});

describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    var text = 'Test todo text';

    request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find({text}).then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e) => done(e));
      });
  });

  it('should not create todo with invalid body data', (done) => {
      request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err,res)=>{
          if(err){
            return done(err);
          }

          Todo.find().then((todos)=>{
            expect(todos.length).toBe(2)
            done();
          }).catch((e)=>{
            done(e);
          })
        })
  });
 });

describe('Get/todos',()=>{
  it('should return all todos',(done)=>{
    request(app)
    .get('/todos')
    .expect(200)
    .expect((res)=>{
      expect(res.body.todos.length).toBe(2)
    })
    .end(done);

  })
})
describe('Get/todos/:id',()=>{
  it('should return valid object',(done)=>{
    request(app)
    .get(`/todos/${todos[0]._id.toHexString()}`)
    .expect(200)
    .expect((res)=>{
      expect(res.body.todo.text).toBe(todos[0].text);
    })
    .end(done);
  })
  it('should retrun 404 status if id not found',(done)=>{
    request(app)
    .get(`/todos/${new ObjectId().toHexString()}`)
    .expect(404)
    .end(done);
  })
  it('should return 404 if it is invalid id',(done)=>{
    request(app)
    .get('/todos/123abc')
    .expect(404)
    .end(done);
  })

});


