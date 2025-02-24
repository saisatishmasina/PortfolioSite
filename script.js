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
});