/**
 * Created by garga9 on 24/10/2017.
 */
var expect = require('expect');
var rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {

    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

   it('should call the spies correctly', () => {
       var spy = expect.createSpy();
       spy();
       expect(spy).toHaveBeenCalled();
   });

   it('should call the spy with correct arguments', () => {
      var spy = expect.createSpy();
      spy('Amit', 'Garg');
      expect(spy).toHaveBeenCalledWith('Amit', 'Garg');
   });

    it('should call saveUser with user object', () => {
       var email = 'test123@example.com';
       var password = 'abcd1234';

       app.handleSignup(email, password);

       expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});

