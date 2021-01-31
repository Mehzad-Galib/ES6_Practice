class Student {
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.school = 'collegiate school';
    }
}

const student1 = new Student(12, 'rahi');
const student2 = new Student(13, 'bahi');

console.log(student1, student2);