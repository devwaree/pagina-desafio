function openSkillDetails(e) {
  var skillElement = e.target.parentNode.parentNode;
  var skills = document.querySelectorAll(".servicos__skills__skill--active");

  skillElement.classList.add("servicos__skills__skill--active");

  skills.forEach(function (skill) {
    skill.classList.remove("servicos__skills__skill--active");
  });
}
