import {expect} from 'chai';
import Fizzbuzz from '../src/main'

describe('Main', () => {
    it('should return Fizz when divided by 3', () => {
        expect(Fizzbuzz(3)).to.be.equal('Fizz');
        expect(Fizzbuzz(6)).to.be.equal('Fizz');
    })

    it('should return Buzz when divide by 5', () => {
        expect(Fizzbuzz(5)).to.be.equal('Buzz')
        expect(Fizzbuzz(10)).to.be.equal('Buzz')
    })

    it('should return Buzz when divided by 3 and 5', () => {
        expect(Fizzbuzz(15)).to.be.equal('FizzBuzz')
    })
    it('should return the number', () => {
        expect(Fizzbuzz(7)).to.be.equal(7)
    })
})