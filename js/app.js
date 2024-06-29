// Sample student results
const studentResults = {
    "FRC-24-01": { name: "Abdulrahman Abdulrahman", grade: "A", subjects: { Math: 90, English: 85, Science: 88, Civic: 40 }, comment: '<li>The assessment revealed remarkable fluency in Math, Science and Civic Studies.</li> <br> <li>The outcome in some aspects of language skills were admirable as well</li> <br> <li>However, notable shortfalls were observed particularly in Creative Writing.</li> <br> <li>Conclusively, the applicant is recommended for provisional admission into Grade 7</li>'},
    "FRC-24-02": { name: "Abdullah Mohammed Musawa", grade: "A", subjects: { Math: 90, English: 85, Science: 88, Civic: 40 }, comment: '<li>The assessment revealed remarkable fluency in Math, Science and Civic Studies.</li> <br> <li>The outcome in some aspects of language skills were admirable as well</li> <br> <li>However, notable shortfalls were observed particularly in Creative Writing.</li> <br> <li>Conclusively, the applicant is recommended for provisional admission into Grade 7</li>'},
    "FRC-24-03": { name: "Jasim Abdulraheem", grade: "A", subjects: { Math: 90, English: 85, Science: 88, Civic: 40 }, comment: '<li>The assessment revealed remarkable fluency in Math, Science and Civic Studies.</li> <br> <li>The outcome in some aspects of language skills were admirable as well</li> <br> <li>However, notable shortfalls were observed particularly in Creative Writing.</li> <br> <li>Conclusively, the applicant is recommended for provisional admission into Grade 7</li>'},
    "FRC-24-04": { name: "Mubarak Abdulrahman", grade: "A", subjects: { Math: 90, English: 85, Science: 88, Civic: 40 }, comment: '<li>The assessment revealed remarkable fluency in Math, Science and Civic Studies.</li> <br> <li>The outcome in some aspects of language skills were admirable as well</li> <br> <li>However, notable shortfalls were observed particularly in Creative Writing.</li> <br> <li>Conclusively, the applicant is recommended for provisional admission into Grade 7</li>'},
    "FRC-24-05": { name: "Bilal Ibraheem", grade: "A", subjects: { Math: 90, English: 85, Science: 88, Civic: 40 }, comment: '<li>The assessment revealed remarkable fluency in Math, Science and Civic Studies.</li> <br> <li>The outcome in some aspects of language skills were admirable as well</li> <br> <li>However, notable shortfalls were observed particularly in Creative Writing.</li> <br> <li>Conclusively, the applicant is recommended for provisional admission into Grade 7</li>'},
    "FRC-24-06": { name: "Zainab Usman Baba", grade: "A", subjects: { Math: 90, English: 85, Science: 88, Civic: 40 }, comment: '<li>The assessment revealed remarkable fluency in Math, Science and Civic Studies.</li> <br> <li>The outcome in some aspects of language skills were admirable as well</li> <br> <li>However, notable shortfalls were observed particularly in Creative Writing.</li> <br> <li>Conclusively, the applicant is recommended for provisional admission into Grade 7</li>'},
    "FRC-24-07": { name: "Lubnah Abubakar", grade: "A", subjects: { Math: 90, English: 85, Science: 88, Civic: 40 }, comment: '<li>The assessment revealed remarkable fluency in Math, Science and Civic Studies.</li> <br> <li>The outcome in some aspects of language skills were admirable as well</li> <br> <li>However, notable shortfalls were observed particularly in Creative Writing.</li> <br> <li>Conclusively, the applicant is recommended for provisional admission into Grade 7</li>'},
    "FRC-24-08": { name: "Murjanatu Saiful-Muluk", grade: "A", subjects: { Math: 90, English: 85, Science: 88, Civic: 40 }, comment: '<li>The assessment revealed remarkable fluency in Math, Science and Civic Studies.</li> <br> <li>The outcome in some aspects of language skills were admirable as well</li> <br> <li>However, notable shortfalls were observed particularly in Creative Writing.</li> <br> <li>Conclusively, the applicant is recommended for provisional admission into Grade 7</li>'},
    "FRC-24-09": { name: "Ikram Hassan Samdi", grade: "A", subjects: { Math: 90, English: 85, Science: 88, Civic: 40 }, comment: '<li>The assessment revealed remarkable fluency in Math, Science and Civic Studies.</li> <br> <li>The outcome in some aspects of language skills were admirable as well</li> <br> <li>However, notable shortfalls were observed particularly in Creative Writing.</li> <br> <li>Conclusively, the applicant is recommended for provisional admission into Grade 7</li>'},
    "FRC-24-10": { name: "Fatima Usman Suleiman", grade: "A", subjects: { Math: 90, English: 85, Science: 88, Civic: 40 }, comment: '<li>The assessment revealed remarkable fluency in Math, Science and Civic Studies.</li> <br> <li>The outcome in some aspects of language skills were admirable as well</li> <br> <li>However, notable shortfalls were observed particularly in Creative Writing.</li> <br> <li>Conclusively, the applicant is recommended for provisional admission into Grade 7</li>'},
    "FRC-24-11": { name: "Ihsan Umar Adullahi", grade: "A", subjects: { Math: 90, English: 85, Science: 88, Civic: 40 }, comment: '<li>The assessment revealed remarkable fluency in Math, Science and Civic Studies.</li> <br> <li>The outcome in some aspects of language skills were admirable as well</li> <br> <li>However, notable shortfalls were observed particularly in Creative Writing.</li> <br> <li>Conclusively, the applicant is recommended for provisional admission into Grade 7</li>'},
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
