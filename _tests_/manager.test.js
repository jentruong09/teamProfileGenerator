// constructor
//const { expect } = require('@jest/globals');
const Manager = require('../lib/manager')

describe('Manager', () => {
    it('correct input for employee object with addition of office number for the manager', () => {
        const manager = new Manager('jen','100','email@email.com','39')

        expect(manager.officeNumber).toBe('39')
    });

    describe('getOfficeNumber', () => {
        it('getting the manager office number from getOfficeNumber()', () => {
            const manager = new Manager('jen','100','email@email.com','39') 
            expect(manager.getOfficeNumber()).toBe('39')
        })
    });

    describe('getRole', () => {
        it('getting the manager role from getRole()', () => {
            const manager = new Manager('jen','100','email@email.com','39') 
            expect(manager.getRole()).toBe('Manager')
        })
    })
})