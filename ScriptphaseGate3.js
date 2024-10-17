let str = "hello world";
let vowels = "aeiouAEIOU";
let vowelCount = 0;

for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
        vowelCount++;

console.log("number of vowels:" + vowelCount);

    }
}

