/**
 * Created by garga9 on 20/10/2017.
 */
const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe("Server", () => {
    describe("#GET /", () => {
        it('should return hello world', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect({
                    error:'Page not found.'
                })
                .end(done)
        });
    });

    describe("#GET /users", () => {
        it('should return a list of users', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) =>
                    expect(res.body).toInclude({name:'Amit', age:31})
            )
                .end(done)
        });
    });
});



