// constructor
const Engineer = require('../lib/engineer')

describe('Engineer', () => {
    it('correct input for employee object with addition of github username for the engineer', () => {
        const engineer = new Engineer('jen','100','email@email.com','jen39')

        expect(engineer.github).toBe('jen39')
    });

    describe('getGithub', () => {
        it('getting the engineer github username from getGithub()', () => {
            const engineer = new Engineer('jen','100','email@email.com','jen39') 
            expect(engineer.getGithub()).toBe('jen39')
        })
    });

    describe('getRole', () => {
        it('getting the engineer role from getRole()', () => {
            const engineer = new Engineer('jen','100','email@email.com','jen39') 
            expect(engineer.getRole()).toBe('Engineer')
        })
    })
})