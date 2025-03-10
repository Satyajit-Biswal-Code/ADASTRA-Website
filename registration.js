const eventSelect = document.getElementById("event");
        const teamDetails = document.getElementById("team-details");
        const teamMembers = document.getElementById("teamMembers");

        const eventTeamSizes = {
            "Robo race": 3,
            "Robo sumo": 2,
            "Line follower": 1,
            "Robo soccer": 2,
            "Drone league": 2,
            "Hackathon": 3,
            "Codathon": 0
        };

        eventSelect.addEventListener("change", function () {
            teamMembers.innerHTML = "";
            let eventType = eventSelect.value;
            if (eventType && eventTeamSizes[eventType] !== undefined) {
                teamDetails.style.display = "block";
                let teamSize = eventTeamSizes[eventType];
                for (let i = 1; i <= teamSize; i++) {
                    let label = document.createElement("label");
                    label.innerText = `Team Member ${i} Name `;
                    let input = document.createElement("input");
                    input.type = "text";
                    input.name = `member${ i }`;
                    teamMembers.appendChild(label);
                    teamMembers.appendChild(input).style.cssText="font-size:16px; font-weight:bold";
                }
            } else {
                teamDetails.style.display = "none";
            }
        });

        document.getElementById("registrationForm").addEventListener("submit", function (event) {
            event.preventDefault();
            document.getElementById("successMessage").style.display = "block";
            setTimeout(() => {
                document.getElementById("successMessage").style.display = "none";
                document.getElementById("registrationForm").reset();
                teamDetails.style.display = "none";
            }, 2000);
        });


        // Registration

const scriptURL = 'https://script.google.com/macros/s/AKfycbx7qVfDqu64GH9WP2V1iqmPmQDzsgpcY1lVQ5yKcGNyekBwUF3RhbV7OPnQXdX_HRsY/exec'

const form = document.forms['registration_form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Your Registration is Successfull" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
