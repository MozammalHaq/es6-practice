class Student {
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.school = 'Holi Quran School & Madrasha'; //Default Value
    }
}

const student1 = new Student(1, "Sarah");
const student2 = new Student(2, "Farah");

console.log(student1, student2);
console.log(student1.name, student2.name); // নির্দিষ্ট কোন কিছু প্রিন্ট দিতে চাইলে, Name