const toggleSkillsBtn = document.getElementById('toggle-skills-btn');
const hiddenSkills = document.querySelectorAll('.skills .hidden'); // Target hidden <li> elements
if (toggleSkillsBtn && hiddenSkills.length > 0) {
    toggleSkillsBtn.addEventListener('click', () => {
        hiddenSkills.forEach(skill => {
            skill.classList.toggle('hidden'); // Toggle visibility for each hidden skill
        });
        // Change button text between 'Show More' and 'Show Less'
        if (toggleSkillsBtn.innerText === 'Show More') {
            toggleSkillsBtn.innerText = 'Show Less';
        }
        else {
            toggleSkillsBtn.innerText = 'Show More';
        }
    });
}
else {
    console.error("Button or hidden skills not found");
}
export {};
