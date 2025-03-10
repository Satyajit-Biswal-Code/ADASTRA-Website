function scrollToEvent() {
  const select = document.getElementById("Register");
  const value = select.value;
  if (value === "deathrace") {
    document.getElementById("robo-race").scrollIntoView({ behavior: "smooth" });
  } else if (value === "robosumo") {
    document.getElementById("robo-sumo").scrollIntoView({ behavior: "smooth" });
  } else if (value === "robosoccer") {
    document
      .getElementById("robo-soccer")
      .scrollIntoView({ behavior: "smooth" });
  } else if (value === "linefollower") {
    document
      .getElementById("line-follower")
      .scrollIntoView({ behavior: "smooth" });
  } else if (value === "droneleague") {
    document
      .getElementById("drone-league")
      .scrollIntoView({ behavior: "smooth" });
  } else if (value === "hackathon") {
    document.getElementById("hackathon").scrollIntoView({ behavior: "smooth" });
  } else if (value === "codathon") {
    document.getElementById("codathon").scrollIntoView({ behavior: "smooth" });
  }
}
