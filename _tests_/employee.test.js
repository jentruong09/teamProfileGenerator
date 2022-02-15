// constructor
// const { expect } = require('@jest/globals') // this auto-populated?
// const { it } = require('jest-circus'); // this auto-populated?
// const { describe } = require('yargs'); // this auto-populated?
const Employee = require('../lib/employee')

describe('Employee', () => {
    it('correct input for employee object', () => {
        const employee = new Employee('jen','100','email@email.com') 

        expect(employee.name).toBe('jen') //to let the test expect a string in return for the name
        expect(employee.id).toBe('100') // to let the test expect number(s) in return for the id
        expect(employee.email).toBe('email@email.com') //to let the test expext a string in return for the email -- not sure how it will know it is an email? 
    });

    describe('getName', () => {
        it('getting the employee name from getName()', () => {
            const employee = new Employee('jen','100','email@email.com') 
            expect(employee.getName()).toBe('jen')
        })
    });

    describe('getId', () => {
        it('getting the employee id number from getId()', () => {
            const employee = new Employee('jen','100','email@email.com') 
            expect(employee.getId()).toBe('100')
        })
    });

    describe('getEmail', () => {
        it('getting the employee email address from getEmail()', () => {
            const employee = new Employee('jen','100','email@email.com') 
            expect(employee.getEmail()).toBe('email@email.com')
        })
    });

    describe('getRole', () => {
        it('getting the employee role from getRole()', () => {
            const employee = new Employee('jen','100','email@email.com') 
            expect(employee.getRole()).toBe('Employee')
        })
    })
})

