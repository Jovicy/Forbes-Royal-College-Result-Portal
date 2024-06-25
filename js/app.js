// Sample student results
const studentResults = {
    "S123": { name: "John Doe", grade: "A", subjects: { Math: 90, English: 85, Science: 88 } },
    "S124": { name: "Jane Smith", grade: "B", subjects: { Math: 78, English: 82, Science: 79 } },
    "S125": { name: "Sam Wilson", grade: "A", subjects: { Math: 95, English: 89, Science: 92 } },
    "S126": { name: "Emily Brown", grade: "C", subjects: { Math: 65, English: 70, Science: 72 } },
    "S127": { name: "Abudulrahman Salisu", grade: "B", subjects: { Math: 80, English: 88, Science: 84 } },
    "S128": { name: "Alice Green", grade: "A", subjects: { Math: 92, English: 91, Science: 94 } },
    "S129": { name: "Robert White", grade: "C", subjects: { Math: 68, English: 75, Science: 70 } },
    "S130": { name: "Linda Black", grade: "B", subjects: { Math: 82, English: 78, Science: 80 } }
};

function checkResult() {
    const studentId = document.getElementById("studentId").value.trim();
    const resultDiv = document.getElementById("result");

    if (studentId in studentResults) {
        const result = studentResults[studentId];
        resultDiv.innerHTML = `
            <p><strong>Name:</strong> ${result.name}</p>
            <p><strong>Grade:</strong> ${result.grade}</p>
            <p><strong>Subjects:</strong></p>
            <ul>
                ${Object.keys(result.subjects).map(subject => `
                    <li>${subject}: ${result.subjects[subject]}</li>
                `).join('')}
            </ul>
            <p class="red">Comment to student here</p>
        `;
    } else {
        resultDiv.innerHTML = `<p>Student ID not found. Please try again.</p>`;
    }
}

function clearResult() {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
}
