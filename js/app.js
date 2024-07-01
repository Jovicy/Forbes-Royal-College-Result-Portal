// Sample student results
const studentResults = {
    // Abdulrahman Abdulrahman
    "FRC-24-48": { 
        name: "Abdulrahman Abdulrahman", 
        subjects: { Math: 'B', English: 'B', Science: 'A', Civic: 'B' }, 
        parameter: '<p>0-39(D)</p><p>40-59(C)</p><p>60-79(B)</p><p>80-100(A)</p>', 
        comment: `
        <li>Abdulrahman showed commendable ability in language skills and science.</li> <br>
        <li>His performance in Math and Civic studies were good as well.</li> <br> 
        <li>With consistent efforts, he will attain comprehensive excellence.</li> <br> 
        <li>To consolidate on his growth, he is recommended for Grade 7 at Forbes Royal College.</li>`
    },
    
    // Abdullah Mohammed Musawa
    "FRC-24-76": { 
        name: "Abdullah Mohammed Musawa", 
        subjects: { Math: 'C', English: 'B', Science: 'A', Civic: 'B' }, 
        parameter: '<p>0-39(D)</p><p>40-59(C)</p><p>60-79(B)</p><p>80-100(A)</p>', 
        comment: `
        <li>Abdullah's proficiency in science is commendable. He did well in English and civic studies too.</li> <br>
        <li>However, his performance in Mathematics reflects shortfalls in reviewing skills. </li> <br> 
        <li>He will continue to receive our support to bridge identified skill gaps and excel.</li> <br> 
        <li>Conclusively, he is recommended for Grade 7 at Forbes Royal College to continually build on his progress and neutralize challenges faced.</li>`
    },
    
    // Jasim Abdulraheem
    "FRC-24-23": { 
        name: "Jasim Abdulraheem", 
        subjects: { Math: 'B', English: 'B', Science: 'B', Civic: 'C' }, 
        parameter: '<p>0-39(D)</p><p>40-59(C)</p><p>60-79(B)</p><p>80-100(A)</p>', 
        comment: `
        <li>Jasim demonstrated good fluency across all subjects assessed.</li> <br>
        <li>His performance is admirable, but requires further effort to achieve exceptional heights.</li> <br> 
        <li>He shows promising potentials and will be adequately supported to excel.</li> <br> 
        <li>Conclusively, he is recommended for Grade 7 at Forbes Royal College to sustain the pace of his progress 
        and neutralize identified challenges.</li>`
    },
    
    // Mubarak Abdulrahman
    "FRC-24-57": { 
        name: "Mubarak Abdulrahman", 
        subjects: { Math: 'C', English: 'B', Science: 'A', Civic: 'B' }, 
        parameter: '<p>0-39(D)</p><p>40-59(C)</p><p>60-79(B)</p><p>80-100(A)</p>', 
        comment: `
        <li>Mubarak demonstrated remarkable skill in the assesment on Science.</li> <br>
        <li>His performance in English and civic studies was also good.</li> <br> 
        <li>However, shortfalls were noted in mathematics and he will be supported to neutralize them.</li> <br> 
        <li>In order to sustain him on a trajectory of growth, he is recommended for Grade 7 at Forbes Royal College.</li>`
    },

    // Bilal Ibraheem
    "FRC-24-14": { 
        name: "Bilal Ibraheem", 
        subjects: { Math: 'B', English: 'B', Science: 'B', Civic: 'C' }, 
        parameter: '<p>0-39(D)</p><p>40-59(C)</p><p>60-79(B)</p><p>80-100(A)</p>', 
        comment: `
        <li>Bilal portrayed good competence in the subjects assessed.</li> <br>
        <li>He put in considerable effort in his attempt, which is laudable.</li> <br> 
        <li>We are confident in his ability to excel and will continue to provide the support he needs.</li> <br> 
        <li>Sequel to these findings, he is recommended for Grade 7 at Forbes Royal College to eliminate identified 
        challenges and nurture his potentials.</li>`
    },
    
    // Zainab Usman Baba
    "FRC-24-92": { 
        name: "Zainab Usman Baba", 
        subjects: { Math: 'D', English: 'C', Science: 'B', Civic: 'C' }, 
        parameter: '<p>0-39(D)</p><p>40-59(C)</p><p>60-79(B)</p><p>80-100(A)</p>', 
        comment: `
        <li>Zainab showed good proficiency levels in science, and put in considerable efforts in all other subjects assessed</li> <br>
        <li>Although she is yet to attain expected standards, she demonstrated a keen commitment towards achieving excellence.</li> <br> 
        <li>We are keenly following her progress and reassure you that she will receive targeted interventions to enable her excel.</li> <br> 
        <li>Sequel to these findings, she is recommended for Grade 7 at Forbes Royal College to sustain her on a path of comprehensive growth.</li>`
    },
    
    // Lubnah Abubakar
    "FRC-24-38": { 
        name: "Lubnah Abubakar", 
        subjects: { Math: 'C', English: 'B', Science: 'A', Civic: 'B' }, 
        parameter: '<p>0-39(D)</p><p>40-59(C)</p><p>60-79(B)</p><p>80-100(A)</p>', 
        comment: `
        <li>Lubnah portrayed laudable performances in science, civic studies and language skills.</li> <br>
        <li>However, her performance in mathematics reflects some shortfalls.</li> <br> 
        <li>She will receive targeted support to bridge identified skill deficits.</li> <br> 
        <li>Conclusively, she is recommended for Grade 7 at Forbes Royal College to consistently build on her achievements.</li>`
    },
    
    // Murjanatu Saiful-Muluk
    "FRC-24-61": { 
        name: "Murjanatu Saiful-Muluk", 
        subjects: { Math: 'C', English: 'B', Science: 'B', Civic: 'C' }, 
        parameter: '<p>0-39(D)</p><p>40-59(C)</p><p>60-79(B)</p><p>80-100(A)</p>', 
        comment: `
        <li>Murjanatu's assessment revealed good fluency in most aspects of language skills and science.</li> <br>
        <li>She did good in civic studies too, but her performance in mathematics reflects some shortfalls.</li> <br> 
        <li>We will provide the personalized support she needs to triumph over identified challenges.</li> <br> 
        <li>Consequently, we recommend a placement in Grade 7 at Forbes Royal College to accelerate her progress.</li>`
    },
    
    // Ikram Hassan Samdi
    "FRC-24-20": { 
        name: "Ikram Hassan Samdi", 
        subjects: { Math: 'D', English: 'C', Science: 'C', Civic: 'C' }, 
        parameter: '<p>0-39(D)</p><p>40-59(C)</p><p>60-79(B)</p><p>80-100(A)</p>', 
        comment: `
        <li>Ikram put in extensive efforts in her attempts across all subjects assessed.</li> <br>
        <li>The outcome reflects a fair performance with signifcant room for improvement.</li> <br> 
        <li>We are committed to supporting her to continue on a path of consistent progress.</li> <br> 
        <li>Consequently, she is recommended for Grade 7 at Forbes Royal College to favourably accelerate her growth.</li>`
    },
    
    // Fatima Usman Suleiman
    "FRC-24-53": { 
        name: "Fatima Usman Suleiman", 
        subjects: { Math: 'C', English: 'B', Science: 'B', Civic: 'C' }, 
        parameter: '<p>0-39(D)</p><p>40-59(C)</p><p>60-79(B)</p><p>80-100(A)</p>', 
        comment: `
        <li>Fatima performed impressively well in language skills.</li> <br>
        <li>She showed good competence in science and civic studies too.</li> <br> 
        <li>Notable shortfalls were observed in Mathematics and she will be supported to overcome this.</li> <br> 
        <li>Placement in Grade 7 at Forbes Royal College is recommended to propel her towards excellent standards.</li>`
    },
    
    // Ihsan Umar Adullahi
    "FRC-24-68": { 
        name: "Ihsan Umar Adullahi", 
        subjects: { Math: 'D', English: 'D', Science: 'D', Civic: 'D' }, 
        parameter: '<p>0-39(D)</p><p>40-59(C)</p><p>60-79(B)</p><p>80-100(A)</p>', 
        comment: `
        <li>Ihsan portrayed a fair performance in all subjects evaluated.</li> <br>
        <li>She shows good potentials but her progress is receded by inconsistent attendance in school.</li> <br> 
        <li>We remain committed to reinforcing the home-school partnership for her continued progress.</li> <br> 
        <li>Conclusively, she is provisionally recommended for Grade 7, with the condition of a renewed commitment towards participative home support.</li>`
    },
    
    // Sarah Usman Maigari
    "FRC-24-31": { 
        name: "Sarah Usman Maigari", 
        subjects: { Math: 'D', English: 'D', Science: 'D', Civic: 'D' }, 
        parameter: '<p>0-39(D)</p><p>40-59(C)</p><p>60-79(B)</p><p>80-100(A)</p>', 
        comment: `
        <li>The outcome of Sarah's performance shows fair competence in all subjects assessed.</li> <br>
        <li>She shows good potentials, and the ability to excel under our personalized tutelage.</li> <br> 
        <li>We are optimistic that with our unique approach complemented by active home support, she will excel.</li> <br> 
        <li>Sequel to these findings, the provisional class placement is Grade 7.</li>`
    },

    // Mariya Mohammed Inuwa
    "FRC-24-95": { 
        name: "Mariya Mohammed Inuwa", 
        subjects: { Math: 'D', English: 'D', Science: 'D', Civic: 'D' }, 
        parameter: '<p>0-39(D)</p><p>40-59(C)</p><p>60-79(B)</p><p>80-100(A)</p>', 
        comment: `
        <li>Mariya admirably attempted all areas of the assessment.</li> <br>
        <li>Her results show fair outcomes in each subject, indicative of significant learning deficits.</li> <br> 
        <li>Nonetheless, she demonstrates promising prospects and a potential to excel.</li> <br> 
        <li>Consequently, the provisional class placement is Grade 7.</li>`
    },
    
    // Binta Mukhtar
    "FRC-24-47": { 
        name: "Binta Mukhtar", 
        subjects: { Math: 'D', English: 'C', Science: 'B', Civic: 'D' }, 
        parameter: '<p>0-39(D)</p><p>40-59(C)</p><p>60-79(B)</p><p>80-100(A)</p>', 
        comment: `
        <li>Binta performed commendably well in most aspects of science and language skills</li> <br>
        <li>However, her efforts in Mathematics and civic studies were short of expected standards.</li> <br> 
        <li>Overall, she shows good potentials and the ability to excel with the right support.</li> <br> 
        <li>Consequently, the provisional class placement is Grade 7.</li>`
    },
    
    // Safina Suleiman Mustapha
    "FRC-24-10": { 
        name: "Safina Suleiman Mustapha", 
        subjects: { Math: 'D', English: 'D', Science: 'D', Civic: 'D' }, 
        parameter: '<p>0-39(D)</p><p>40-59(C)</p><p>60-79(B)</p><p>80-100(A)</p>', 
        comment: `
        <li>Safina put in great effort to attempt all aspects of the assessment.</li> <br>
        <li>The outcome revealed a fair performance, with significant room for improvement.</li> <br> 
        <li>We are confident that she has the potential to excel to ideal standards with the right support.</li> <br> 
        <li>Conclusively, the provisional class placement is Grade 7.</li>`
    },
    
    // Hajar Mamman Lagos
    "FRC-24-83": { 
        name: "Hajar Mamman Lagos", 
        subjects: { Math: 'D', English: 'C', Science: 'D', Civic: 'D' }, 
        parameter: '<p>0-39(D)</p><p>40-59(C)</p><p>60-79(B)</p><p>80-100(A)</p>', 
        comment: `
        <li>Hajar's performance indicates fair levels of competence in most aspects of English language.</li> <br>
        <li>Her performance in Mathematics indicates extensive skill gaps in foundational concepts.</li> <br> 
        <li>Also, her efforts in science and civic studies were considerably short of expected standards.</li> <br> 
        <li>Generally, she requires to adopt a more reslient and committed outlook for improved outcomes.</li> <br> 
        <li>We are optimistic that she will thrive under our personalized tutelage on enrollment.</li> <br> 
        <li>Following these findings, the provisional class placement is Grade 7.</li>`
    },
    
    // Amina Abdulkadir Yakubu
    "FRC-24-56": { 
        name: "Amina Abdulkadir Yakubu", 
        subjects: { Math: 'D', English: 'D', Science: 'D', Civic: 'D' }, 
        parameter: '<p>0-39(D)</p><p>40-59(C)</p><p>60-79(B)</p><p>80-100(A)</p>', 
        comment: `
        <li>Amina performed fairly across all subjects in the assessment conducted.</li> <br> 
        <li>She put in great effort to attempt questions in all areas which is applaudable.</li> <br> 
        <li>With targeted interventions and optimal home support, we are confident she will thrive. </li> <br> 
        <li>Consequently, the provisional class placement is Grade 7.</li>`
    },
    
    // Khadija Abubakar Usman
    "FRC-24-34": { 
        name: "Khadija Abubakar Usman", 
        subjects: { Math: 'C', English: 'D', Science: 'D', Civic: 'D' }, 
        parameter: '<p>0-39(D)</p><p>40-59(C)</p><p>60-79(B)</p><p>80-100(A)</p>', 
        comment: `
        <li>Khadija demonstrated admirable competence in mathematics.</li> <br>
        <li>Her performance in other subjects assessed was fair, indicating presence of shortfalls.</li> <br> 
        <li>Nonetheless, she portrays promising potentials and shows the will to excel.</li> <br> 
        <li>Conclusively, the provisional class placement is Grade 7.</li>`
    },
};

function checkResult() {
    const studentId = document.getElementById("studentId").value.trim();
    const resultDiv = document.getElementById("result");

    if (studentId in studentResults) {
        const result = studentResults[studentId];
        resultDiv.innerHTML = `
            <p><strong>Name:</strong> ${result.name}</p>
            <p><strong>Subjects:</strong></p>
            <ul>
                ${Object.keys(result.subjects).map(subject => `
                    <li><b>${subject}</b>: ${result.subjects[subject]}</li>
                `).join('')}
            </ul>
            <div class="red"><strong>Score-Grading:</strong><br>${result.parameter}</div>
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
