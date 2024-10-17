let grades = {maths: 90, English: 85, science: 88};

for (let subject in grades) {
    console.log(`Subject: ${subject}, Grade: ${grades[subject]}`);
}
