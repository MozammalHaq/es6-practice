class Parent {
    constructor(){
        this.fatherName = "Schwerznegger";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    // Class এর ভিতর Fanction লিখা যায়। এক্ষেত্রে Function লিখতে হয় না।
    // Class এর ভিতরের ফাংশনকে Method বলে।
    getFullname(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child("Arnold");
const baby2 = new Child("Nakul");
console.log(baby);
console.log(baby2);
console.log(baby2.getFullname());