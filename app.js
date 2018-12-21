const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

sections.forEach(section => {
  section.addEventListener("mouseenter", function() {
    const id = this.getAttribute("id");
    const activeSection = document.querySelector("a[href= '#" + id + "']");
    navLinks.forEach(nav => nav.classList.remove("active"));
    activeSection.classList.add("active");
  });
});
