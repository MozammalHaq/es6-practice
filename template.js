const firstName = 'Mozammal';
const lastName = 'Haq';
const fullName = firstName + ' ' +  lastName + ' want to be a something.';
console.log(fullName);
const fullName2 = `${firstName} ${lastName} ${5+6+7} want to be a something.`; // ES6.  বলা হয় template
console.log(fullName2);
// `` চিহ্নকে বলে ক্যারেট।
//পূর্বে multiline
const multiLine = 'My name is\nMozammal Haq.';
const multiLine2 = `My name is 
Mozammal Haq`;
console.log(multiLine);