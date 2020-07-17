'use strict';

class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    set name(value) {
        if (typeof value !== 'string') {
            throw new TypeError('Property name must be string type');
        }
        this._name = value;
    }

    get name() {
        return this._name;
    }

    set surname(value) {
        if (typeof value !== 'string') {
            throw new TypeError('Property surname must be string type');
        }
        this._surname = value;
    }

    get surname() {
        return this._surname;
    }
}

class Student extends User {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        if (typeof value !== 'number') {
            throw new TypeError('Property year must be number type');
        }
        if (value < 2014 || value > new Date().getFullYear()) {
            throw new RangeError('Invalid year');
        }
        this._year = value;
    }

    getCourse() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }

    getFullName() {
        return `${this.name} ${this.surname}`;
    }
}

const student1 = new Student('Alex', 'Smith', 2015);
console.log(student1.getCourse());
console.log(student1.getFullName());