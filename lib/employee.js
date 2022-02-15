// class, constructor, properties, and methods for employee
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email =email;
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return 'Employee'
    }
}
// Enables code to be used by the test file
module.exports = Employee