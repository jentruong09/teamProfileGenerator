// constructor
const Intern = require('../lib/intern')

describe('Intern', () => {
    it('correct input for employee object with addition school name for the intern', () => {
        const intern = new Intern('jen','100','email@email.com','columbia')

        expect(intern.school).toBe('columbia')
    });

    describe('getSchool', () => {
        it('getting the intern school name from getSchool()', () => {
            const intern = new Intern('jen','100','email@email.com','columbia') 
            expect(intern.getSchool()).toBe('columbia')
        })
    });

    describe('getRole', () => {
        it('getting the intern role from getRole()', () => {
            const intern = new Intern('jen','100','email@email.com','columbia') 
            expect(intern.getRole()).toBe('Intern')
        })
    })
})