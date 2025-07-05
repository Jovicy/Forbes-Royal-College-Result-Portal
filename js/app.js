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
  // Newly Added Students:
  "FRC-25-71": {
    name: "Daniel Bitiyong Ananda",
    subjects: {
      "English and Literary Skills (Grammar)": "B",
      "English and Literary Skills (Creative Writing)": "A",
      "English and Literary Skills (Comprehension)": "B",
      Mathematics: "B",
      Science: "A",
      "Civic Studies": "B",
    },
    parameter: sharedParameter(),
    comment: `
      <li>Abdulrahman showed commendable ability in language skills and science.</li><br>
      <li>His performance in Math and Civic studies were good as well.</li><br> 
      <li>With consistent efforts, he will attain comprehensive excellence.</li><br> 
      <li>To consolidate on his growth, he is recommended for Grade 7 at Forbes Royal College.</li>
    `,
  },

  "FRC-25-26": {
    name: "Roy Ndiriza Zachariah",
    subjects: {},
    parameter: sharedParameter(),
    comment: "",
  },
  "FRC-25-39": {
    name: "Ayuba Mohammad Isma'il",
    subjects: {},
    parameter: sharedParameter(),
    comment: "",
  },
  "FRC-25-15": {
    name: "Fahad Lawal Nadabo",
    subjects: {},
    parameter: sharedParameter(),
    comment: "",
  },
  "FRC-25-63": {
    name: "Annur Mohammed Usman",
    subjects: {},
    parameter: sharedParameter(),
    comment: "",
  },
  "FRC-25-87": {
    name: "Nurain Mohammed Usman",
    subjects: {},
    parameter: sharedParameter(),
    comment: "",
  },
  "FRC-25-54": {
    name: "Muhammad Jibrin Aliyu",
    subjects: {},
    parameter: sharedParameter(),
    comment: "",
  },
  "FRC-25-08": {
    name: "Fatima Zara Aminu Gwani",
    subjects: {},
    parameter: sharedParameter(),
    comment: "",
  },
  "FRC-25-93": {
    name: "Zainab Sani Bello",
    subjects: {},
    parameter: sharedParameter(),
    comment: "",
  },
  "FRC-25-11": {
    name: "Zainab Sule Aliyu",
    subjects: {},
    parameter: sharedParameter(),
    comment: "",
  },
  "FRC-25-78": {
    name: "Abdullah Bello Muhammad",
    subjects: {},
    parameter: sharedParameter(),
    comment: "",
  },
  "FRC-25-44": {
    name: "Khadija Sani Haruna",
    subjects: {},
    parameter: sharedParameter(),
    comment: "",
  },
  "FRC-25-32": {
    name: "Asma'u Ahmad Jarma",
    subjects: {},
    parameter: sharedParameter(),
    comment: "",
  },
  "FRC-25-19": {
    name: "Idris Aliyu",
    subjects: {},
    parameter: sharedParameter(),
    comment: "",
  },
  "FRC-25-68": {
    name: "Tahir Muhammad Aminun Kano",
    subjects: {},
    parameter: sharedParameter(),
    comment: "",
  },
  "FRC-25-96": {
    name: "Destiny Ubong Udonte",
    subjects: {},
    parameter: sharedParameter(),
    comment: "",
  },
  "FRC-25-23": {
    name: "Divine-Favour Ubong Udonte",
    subjects: {},
    parameter: sharedParameter(),
    comment: "",
  },
  "FRC-25-50": {
    name: "Altaf Aliyu",
    subjects: {},
    parameter: sharedParameter(),
    comment: "",
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
