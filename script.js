document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("projectsContainer");
  const projects = document.querySelectorAll(".project-card");
  const currentNum = document.getElementById("currentProject");
  const totalNum = document.getElementById("totalProjects");

  totalNum.textContent = String(projects.length).padStart(2, "0");

  // Detectar el proyecto visible durante el desplazamiento
  const observerOptions = {
    root: container,
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = Array.from(projects).indexOf(entry.target) + 1;
        currentNum.textContent = String(index).padStart(2, "0");
      }
    });
  }, observerOptions);

  projects.forEach((project) => observer.observe(project));
});
