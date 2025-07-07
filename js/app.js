function toggleSidebar() {
  document.querySelector(".sidebar").classList.toggle("show");
}

// Shared grading parameter
function sharedParameter() {
  return `
    <p class="parameters">0-39(D)</p>
    <p class="parameters">40-59(C)</p>
    <p class="parameters">60-79(B)</p>
    <p class="parameters">80-100(A)</p>
  `;
}

const studentResults = {
  // Daniel Bitiyong Ananda
  "FRC-25-71": {
    name: "Daniel Bitiyong Ananda",
    subjects: {
      "English and Literary Skills (Grammar)": "B",
      "English and Literary Skills (Creative Writing)": "B",
      "English and Literary Skills (Comprehension)": "A",
      Mathematics: "A",
      Science: "B",
      "Civic Studies": "A",
    },
    parameter: sharedParameter(),
    comment: `
        <li>Daniel demonstrated a stellar performance in mathematics, civic studies as well as comprehension.</li><br>
        <li>The outcome of his assessment in science, creative writing and grammar is also commendable.</li><br>
        <li>Conclusively, a provisional placement in Grade 7 is recommended, while we continue to support him optimally to excel.</li><br>
    `,
  },
  // Roy Ndiriza Zachariah
  "FRC-25-26": {
    name: "Roy Ndiriza Zachariah",
    subjects: {
      "English and Literary Skills (Grammar)": "B",
      "English and Literary Skills (Creative Writing)": "C",
      "English and Literary Skills (Comprehension)": "A",
      Mathematics: "C",
      Science: "B",
      "Civic Studies": "A",
    },
    parameter: sharedParameter(),
    comment: `
        <li>Roy’s performance in civic studies and comprehension revealed impressive fluency levels in these subject areas.</li><br>
        <li>The outcome of the assessment in science and grammar too was commendable, while he portrayed fairly good proficiency in creative writing and mathematics.</li><br>
        <li>Conclusively, a provisional placement in Grade 7 is approved, while we continue to support him to reach his optimal potentials.</li><br>
    `,
  },
  // Ayuba Mohammad Isma'il
  "FRC-25-39": {
    name: "Ayuba Mohammad Isma'il",
    subjects: {
      "English and Literary Skills (Grammar)": "D",
      "English and Literary Skills (Creative Writing)": "D",
      "English and Literary Skills (Comprehension)": "D",
      Mathematics: "D",
      Science: "D",
      "Civic Studies": "D",
    },
    parameter: sharedParameter(),
    comment: `
        <li>Ayuba’s performance across all areas evaluated falls significantly below desired standards.</li><br>
        <li>His approach to attempting questions portrayed a worrisome absence of genuine efforts.</li><br>
        <li>While we believe in his potentials, it is our objective opinion that a placement in Grade 7 will not favourably support his growth.</li><br>
        <li>We therefore recommend a repeat of Grade 6, while rigorous personalized strategies are put in place to overcome identified challenges.</li><br>
    `,
  },
  // Fahad Lawal Nadabo
  "FRC-25-15": {
    name: "Fahad Lawal Nadabo",
    subjects: {
      "English and Literary Skills (Grammar)": "C",
      "English and Literary Skills (Creative Writing)": "C",
      "English and Literary Skills (Comprehension)": "A",
      Mathematics: "D",
      Science: "C",
      "Civic Studies": "A",
    },
    parameter: sharedParameter(),
    comment: `
        <li>Fahad’s performance in comprehension and civic studies was impressive where he obtained excellent outcomes.</li><br>
        <li>The evaluation in science, grammar and creative writing too revealed fairly good proficiency in these areas with room for improvement.</li><br>
        <li>Significant support is however required in mathematics in order to reach the desired standard.</li><br>
        <li>Conclusively, a provisional placement in Grade 7 is approved.</li><br>
    `,
  },
  // Annur Mohammed Usman
  "FRC-25-63": {
    name: "Annur Mohammed Usman",
    subjects: {
      "English and Literary Skills (Grammar)": "D",
      "English and Literary Skills (Creative Writing)": "D",
      "English and Literary Skills (Comprehension)": "A",
      Mathematics: "D",
      Science: "C",
      "Civic Studies": "D",
    },
    parameter: sharedParameter(),
    comment: `
        <li>Annur performed fairly well in the assessment, with notably laudable outcomes in comprehension and science.</li><br> 
        <li>He however showed considerable deficits in grammar, creative writing, mathematics and civic studies which need to be addressed.</li><br>  
        <li>Conclusively, a provisional placement in Grade 7 is approved, with emphasis on parental support to complement personalized efforts at school.</li><br>  
    `,
  },
  // Nurain Mohammed Usman
  "FRC-25-87": {
    name: "Nurain Mohammed Usman",
    subjects: {
      "English and Literary Skills (Grammar)": "C",
      "English and Literary Skills (Creative Writing)": "C",
      "English and Literary Skills (Comprehension)": "A",
      Mathematics: "D",
      Science: "C",
      "Civic Studies": "D",
    },
    parameter: sharedParameter(),
    comment: `
        <li>Nurain excelled in the assessment on comprehension, and put in commendable effort in creative writing, grammar and science.</li><br>
        <li>His performance in mathematics and civic studies however falls significantly below desired standards.</li><br>
        <liWe are confident that with active home support coupled with personalized corrective strategies in school, he will triumph.</li><br>
        <li>Conclusively, a provisional class placement in Grade 7 is approved.</li><br>
    `,
  },
  // Muhammad Jibrin Aliyu
  "FRC-25-54": {
    name: "Muhammad Jibrin Aliyu",
    subjects: {
      "English and Literary Skills (Grammar)": "D",
      "English and Literary Skills (Creative Writing)": "C",
      "English and Literary Skills (Comprehension)": "A",
      Mathematics: "D",
      Science: "C",
      "Civic Studies": "B",
    },
    parameter: sharedParameter(),
    comment: `
        <li>Muhammad did impressively in comprehension, and showed commendable efforts in civic studies.</li><br>
        <li>His performance in creative writing, science and creative writing showed fairly good fluency levels.</li><br>
        <li>Extensive shortfalls were however reflected in the assessment on mathematics and grammar, indicating significant room for improvement.</li><br>
    `,
  },
  // Fatima Zara Aminu Gwani
  "FRC-25-08": {
    name: "Fatima Zara Aminu Gwani",
    subjects: {
      "English and Literary Skills (Grammar)": "C",
      "English and Literary Skills (Creative Writing)": "B",
      "English and Literary Skills (Comprehension)": "A",
      Mathematics: "D",
      Science: "C",
      "Civic Studies": "B",
    },
    parameter: sharedParameter(),
    comment: `
        <li>Fatima did exceptionally well in comprehension, and put in admirable efforts in grammar, creative writing, civic studies and science.</li><br>
        <li>Her performance in mathematics however falls short of desired standards, requiring significant improvement.</li><br>
        <li>Conclusively, a provisional placement in Grade 7 is approved, with emphasis on participative home support to complement personalized efforts at school.</li><br>
    `,
  },
  // Zainab Sani Bello
  "FRC-25-93": {
    name: "Zainab Sani Bello",
    subjects: {
      "English and Literary Skills (Grammar)": "B",
      "English and Literary Skills (Creative Writing)": "B",
      "English and Literary Skills (Comprehension)": "A",
      Mathematics: "B",
      Science: "B",
      "Civic Studies": "A",
    },
    parameter: sharedParameter(),
    comment: `
        <li>Zainab performed impressively in all aspects of the assessment, with excellent outcomes cutting across every subject area evaluated.</li><br>
        <li>We commend her achievement and restate our commitment towards supporting her to continue on a path of excellence.</li><br>
        <li>Conclusively, a provisional placement in Grade 7 is approved.</li><br>
    `,
  },
  // Zainab Sule Aliyu
  "FRC-25-11": {
    name: "Zainab Sule Aliyu",
    subjects: {
      "English and Literary Skills (Grammar)": "D",
      "English and Literary Skills (Creative Writing)": "C",
      "English and Literary Skills (Comprehension)": "B",
      Mathematics: "D",
      Science: "D",
      "Civic Studies": "D",
    },
    parameter: sharedParameter(),
    comment: `
        <li>Zainab did commendably well in comprehension and put in great effort in her creative writing too.</li><br>
        <li>Her performance in grammar, mathematics, science and civic studies is however short of desired standards.</li><br>
        <li>We are confident that she has the potential to excel optimally with active home support to complement our personalized strategies.</li><br>
        <li>Conclusively, a provisional placement in Grade 7 is approved.</li><br>
    `,
  },
  // Abdullah Bello Muhammad
  "FRC-25-78": {
    name: "Abdullah Bello Muhammad",
    subjects: {
      "English and Literary Skills (Grammar)": "B",
      "English and Literary Skills (Creative Writing)": "A",
      "English and Literary Skills (Comprehension)": "A",
      Mathematics: "B",
      Science: "B",
      "Civic Studies": "A",
    },
    parameter: sharedParameter(),
    comment: `
      <li>Abdullah performed exceptionally in creative writing, comprehension and civic studies.</li><br>
      <li>The outcome of his assessment in grammar, math, science and grammar too was commendable.</li><br> 
      <li>Conclusively, a provisional placement in Grade 7 is approved.</li><br> 
    `,
  },
  // Khadija Sani Haruna
  "FRC-25-44": {
    name: "Khadija Sani Haruna",
    subjects: {
      "English and Literary Skills (Grammar)": "D",
      "English and Literary Skills (Creative Writing)": "D",
      "English and Literary Skills (Comprehension)": "B",
      Mathematics: "D",
      Science: "D",
      "Civic Studies": "D",
    },
    parameter: sharedParameter(),
    comment: `
        <li>Khadijah put in great effort to attempt all aspects of the assessment, performing well notably in comprehension.</li><br>
        <li>The overall outcome revealed fair proficiency levels with significant room for improvement.</li><br>
        <li>We are confident that she has the potential to excel to ideal standards when adequately supported.</li><br>
        <li>Conclusively, a provisional placement in Grade 7 is approved, with emphasis on active home support personalized strategies at school.</li><br>
    `,
  },
  // Asma'u Ahmad Jarma
  "FRC-25-32": {
    name: "Asma'u Ahmad Jarma",
    subjects: {
      "English and Literary Skills (Grammar)": "D",
      "English and Literary Skills (Creative Writing)": "D",
      "English and Literary Skills (Comprehension)": "C",
      Mathematics: "D",
      Science: "D",
      "Civic Studies": "C",
    },
    parameter: sharedParameter(),
    comment: `
        <li>Asma’u put in commendable effort in the assessment on comprehension skills and civic studies.</li><br>
        <li>Considerable shortfalls were however reflected in grammar, creative writing, math and science.</li><br>
        <li>We are optimistic in her ability to excel with the implementation of our personalized strategies.</li><br>
        <li>Conclusively, a provisional placement in Grade 7 is approved.</li><br>
    `,
  },
  // Idris Aliyu
  "FRC-25-19": {
    name: "Idris Aliyu",
    subjects: {
      "English and Literary Skills (Grammar)": "C",
      "English and Literary Skills (Creative Writing)": "D",
      "English and Literary Skills (Comprehension)": "A",
      Mathematics: "C",
      Science: "C",
      "Civic Studies": "A",
    },
    parameter: sharedParameter(),
    comment: `
        <li>Idris did impressively well in comprehension and civic studies.</li><br>
        <li>His performance in grammar, mathematics and science too showed fairly good fluency levels.</li><br>
        <li>Extensive deficits were however revealed in his conversance with creative writing.</li><br>
        <li>He shows promising potentials and we believe he will excel with adequate support.</li><br>
        <li>Conclusively, a provisional placement in Grade 7 is approved.</li><br>
    `,
  },
  // Tahir Muhammad Aminun Kano
  "FRC-25-68": {
    name: "Tahir Muhammad Aminun Kano",
    subjects: {
      "English and Literary Skills (Grammar)": "C",
      "English and Literary Skills (Creative Writing)": "D",
      "English and Literary Skills (Comprehension)": "D",
      Mathematics: "D",
      Science: "C",
      "Civic Studies": "C",
    },
    parameter: sharedParameter(),
    comment: `
        <li>Muhammad put in admirable efforts to attempt all aspects of the assessment, and did fairly well in grammar, science as well as civic studies.</li><br>
        <li>The outcome of his evaluation in creative writing, comprehension and mathematics revealed significant shortfalls.</li><br>
        <li>We are optimistic that with our personalized strategies and active home support, he will excel.</li><br>
        <li>Conclusively, a provisional placement in Grade 7 is approved.</li><br>
    `,
  },
  // Destiny Ubong Udonte
  "FRC-25-96": {
    name: "Destiny Ubong Udonte",
    subjects: {
      "English and Literary Skills (Grammar)": "C",
      "English and Literary Skills (Creative Writing)": "A",
      "English and Literary Skills (Comprehension)": "B",
      Mathematics: "D",
      Science: "C",
      "Civic Studies": "B",
    },
    parameter: sharedParameter(),
    comment: `
        <li>Destiny’s performance in creative writing, grammar, comprehension and civic studies is commendable. Significant shortfalls were however observed in mathematics.</li><br>
        <li>We applaud his efforts in attempting all aspects of the assessment and are optimistic in his ability to excel with the right support.</li><br>
        <li>Conclusively, a provisional placement in Grade 7 is approved.</li><br>
    `,
  },
  // Altaf Aliyu
  "FRC-25-50": {
    name: "Altaf Aliyu",
    subjects: {
      "English and Literary Skills (Grammar)": "D",
      "English and Literary Skills (Creative Writing)": "D",
      "English and Literary Skills (Comprehension)": "C",
      Mathematics: "D",
      Science: "D",
      "Civic Studies": "C",
    },
    parameter: sharedParameter(),
    comment: `
        <li>Altaf’s performance in comprehension and civic studies is admirable, with room for improvement.</li><br>
        <li>Significant shortfalls were however seen in grammar, creative writing, comprehension and mathematics.</li><br>
        <li>We are confident that complementing our personalized strategies with active home support will yield desired progress.</li><br>
        <li>Conclusively, a provisional class placement in Grade 7 is approved.</li><br>
    `,
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
                ${Object.keys(result.subjects)
                  .map(
                    (subject) =>
                      ` <li><b>${subject}</b>: ${result.subjects[subject]}</li>`
                  )
                  .join("")}
            </ul>
            <div class="red"><strong>Score-Grading:</strong><br>${
              result.parameter
            }</div>
            <div class="red">${result.comment}</div>
        `;

    // 🔁 Update the user profile name
    const userProfileName = document.querySelector(".user-profile p");
    if (userProfileName) {
      userProfileName.textContent = result.name;
    }
  } else {
    resultDiv.innerHTML = `<p>Student ID not found. Please try again.</p>`;
  }
}

function clearResult() {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";
}
