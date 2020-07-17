/*Реализуйте класс Student (Студент), который будет наследовать от класса User. Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.*/

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