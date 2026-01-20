const jobs = [
  { role: "Developer", location: "Bangalore", company: "Infosys" },
  { role: "Designer", location: "Remote", company: "TCS" },
  { role: "Tester", location: "Bangalore", company: "Wipro" }
];

function displayJobs(list) {
  const container = document.getElementById("jobList");
  container.innerHTML = "";

  list.forEach(job => {
    container.innerHTML += `
      <div class="job-card">
        <h3>${job.role}</h3>
        <p>${job.company}</p>
        <p>${job.location}</p>
        <button>Apply Now</button>
      </div>
    `;
  });
}

function filterJobs() {
  const role = document.getElementById("role").value;
  const location = document.getElementById("location").value;

  const filtered = jobs.filter(j =>
    (role === "" || j.role === role) &&
    (location === "" || j.location === location)
  );

  displayJobs(filtered);
}

window.onload = () => displayJobs(jobs);
