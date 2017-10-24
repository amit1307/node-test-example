/**
 * Created by garga9 on 12/10/2017.
 */
const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(10, 20);
    if(res !== 30) {
        throw new Error(`Expected sum 30, actual sum ${res}`);
    }
});

it('should square a given number', () => {
    var res = utils.square(5);
    if(res !== 25) {
        throw new Error(`Expected result 25 but actual result ${res}`);
    }
});

it('should add two numbers and assert using expect module', () => {
    var res = utils.add(10, 20);
    expect(res).toBe(30).toBeA('number')
});

it('should square a number and assert it with expect module', () => {
    var res = utils.square(5);
    expect(res).toBe(25).toBeA('number')
});

it('should check the first name and last name', () => {
    var user = {age: '25',
                country: 'India'};
    var res = utils.setName(user, "Amit Garg");
    expect(res).toInclude({firstName:'Amit', lastName:'Garg'});
});

it('should add numbers in async', (done) => {
    utils.addAsync(5, 7, (res) => {
        expect(res).toBe(12).toBeA('number');
        done();
    });
});

it('should square a number in async', (done) => {
    utils.squareAsync(5, (res) => {
        expect(res).toBe(25).toBeA('number');
        done();
    });
});