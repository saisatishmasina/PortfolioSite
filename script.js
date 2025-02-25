document.addEventListener("DOMContentLoaded", function () {
    // Select all paragraphs with the class 'list_para'
    document.querySelectorAll(".list_para").forEach(paragraph => {
        const text = paragraph.innerText;
        const sentences = text.split(". ").filter(sentence => sentence.trim() !== "");

        // Create a new unordered list
        const ul = document.createElement("ul");
        sentences.forEach(sentence => {
            const li = document.createElement("li");
            li.textContent = sentence + "."; // Add period back
            ul.appendChild(li);
        });

        // Replace paragraph with the generated list
        paragraph.replaceWith(ul);
    });

    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');

    // Hide all sections initially except the "About" section
    sections.forEach(section => {
        if (section.id !== 'about') {
            section.classList.add('hidden');
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('data-target');

            // Hide all sections
            sections.forEach(section => section.classList.add('hidden'));

            // Show the target section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.remove('hidden');
            }
        });
    });
});