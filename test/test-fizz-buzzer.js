const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

//unit test for out fizzBuzzer function
describe('fizzBuzzer', function() {
    //test the normal cases
    it('should replace number divisible by three with fizz and five with buzz and both with fizzbuzz',
    function () {
        const normalCases = [
            {num: 5, expected: 'buzz'},
            {num: 3, expected: 'fizz'},
            {num: 15, expected: 'fizz-buzz'}
        ];
        //for each num fizzBuzzer should produce expected value
        normalCases.forEach(function(input) {
            const answer = fizzBuzzer(input.num);
            answer.should.equal(input.expected);
        });
    });
    //test the edge cases
    it('should raise errors if not a number', function() {
        const badInputs = ['1','dog','gkgkg', false];
        //prove that an error is raised for bad inputs
        badInputs.forEach(function(input) {
            (function() {
                fizzBuzzer(input)
            }).should.throw(Error);
        });
    });
});
