// constructor
const { expect } = require('@jest/globals') // this auto-populated?
const { it } = require('jest-circus') // this auto-populated?
const Employee = require('../lib/employee')

describe('Employee', () => {
    it('correct input for employee object', () => {
        const employee = new Employee('name','id','email') //change this to be an example of each? 

        expect(employee.name).toBe('string') //to let the test expect a string in return for the name
        expect(employee.id).toBe('number') // to let the test expect number(s) in return for the id
        expect(employee.email).toBe('string') //to let the test expext a string in return for the email -- not sure how it will know it is an email? 
    })
})

