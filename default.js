function add(num1, num2 = 0) {
    // if (num2 == undefined) {
    //     num2 = 0;
    // }
    // num2 = num2 || 0;
    return num1 + num2;
}
const total = add(15, 17); // ঠিকঠাক দেখাবে। কিন্তু যদি একটি সংখ্যা দেওয়া হয় নিচের মত।
const sum = add(15);// তখন NaN দেখাবে। এই সমস্যা সমাধানের জন্য ফাংশনের ভিতর if দিয়ে উপরের মত লিখতে হবে। তখন 15 দেখাবে। অথবা দ্বিতীয় নিয়মেও করা যায়। 
// es6 এ add(num1, num2 = 0) লিখে দিলেও হয়। যেখানে 0 হচ্ছে বেকাপ। যদি দুটি ভেলু পেয়ে যায় তবে সে এটা আর নিবে না। আর যদি একটি ভেলু দেওয়া হয় তবে সে সেটাকে নিয়ে যোগ করবে। 
console.log(total);
console.log(sum);