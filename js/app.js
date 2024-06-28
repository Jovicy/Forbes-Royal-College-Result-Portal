// Sample student results
const studentResults = {
    "S123": { name: "John Doe", grade: "A", subjects: { Math: 90, English: 85, Science: 88 }, comment: '<li>The assessment revealed remarkable fluency in Math, Science and Civic Studies.</li> <br> <li>The outcome in some aspects of language skills were admirable as well</li> <br> <li>However, notable shortfalls were observed particularly in Creative Writing.</li> <br> <li>Conclusively, the applicant is recommended for provisional admission into Grade 7</li>'},
    "S124": { name: "Jane Smith", grade: "B", subjects: { Math: 78, English: 82, Science: 79 }, comment: '<li>The assessment revealed remarkable fluency in Math, Science and Civic Studies.</li> <br> <li>The outcome in some aspects of language skills were admirable as well</li> <br> <li>However, notable shortfalls were observed particularly in Creative Writing.</li> <br> <li>Conclusively, the applicant is recommended for provisional admission into Grade 7</li>'},
    "S125": { name: "Sam Wilson", grade: "A", subjects: { Math: 95, English: 89, Science: 92 }, comment: '<li>The assessment revealed remarkable fluency in Math, Science and Civic Studies.</li> <br> <li>The outcome in some aspects of language skills were admirable as well</li> <br> <li>However, notable shortfalls were observed particularly in Creative Writing.</li> <br> <li>Conclusively, the applicant is recommended for provisional admission into Grade 7</li>'},
    "S126": { name: "Emily Brown", grade: "C", subjects: { Math: 65, English: 70, Science: 72 }, comment: '<li>The assessment revealed remarkable fluency in Math, Science and Civic Studies.</li> <br> <li>The outcome in some aspects of language skills were admirable as well</li> <br> <li>However, notable shortfalls were observed particularly in Creative Writing.</li> <br> <li>Conclusively, the applicant is recommended for provisional admission into Grade 7</li>'},
    "S127": { name: "Abudulrahman Salisu", grade: "B", subjects: { Math: 80, English: 88, Science: 84 }, comment: '<li>The assessment revealed remarkable fluency in Math, Science and Civic Studies.</li> <br> <li>The outcome in some aspects of language skills were admirable as well</li> <br> <li>However, notable shortfalls were observed particularly in Creative Writing.</li> <br> <li>Conclusively, the applicant is recommended for provisional admission into Grade 7</li>'},
    "S128": { name: "Alice Green", grade: "A", subjects: { Math: 92, English: 91, Science: 94 }, comment: '<li>The assessment revealed remarkable fluency in Math, Science and Civic Studies.</li> <br> <li>The outcome in some aspects of language skills were admirable as well</li> <br> <li>However, notable shortfalls were observed particularly in Creative Writing.</li> <br> <li>Conclusively, the applicant is recommended for provisional admission into Grade 7</li>'},
    "S129": { name: "Robert White", grade: "C", subjects: { Math: 68, English: 75, Science: 70 }, comment: '<li>The assessment revealed remarkable fluency in Math, Science and Civic Studies.</li> <br> <li>The outcome in some aspects of language skills were admirable as well</li> <br> <li>However, notable shortfalls were observed particularly in Creative Writing.</li> <br> <li>Conclusively, the applicant is recommended for provisional admission into Grade 7</li>'},
    "S130": { name: "Linda Black", grade: "B", subjects: { Math: 82, English: 78, Science: 80 }, comment: '<li>The assessment revealed remarkable fluency in Math, Science and Civic Studies.</li> <br> <li>The outcome in some aspects of language skills were admirable as well</li> <br> <li>However, notable shortfalls were observed particularly in Creative Writing.</li> <br> <li>Conclusively, the applicant is recommended for provisional admission into Grade 7</li>'}
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
                    <li><b>${subject}</b>: ${result.subjects[subject]}</li>
                `).join('')}
            </ul>
            <div class="red">${result.comment}</div>
        `;
    } else {
        resultDiv.innerHTML = `<p>Student ID not found. Please try again.</p>`;
    }
}

function clearResult() {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
}
