document.addEventListener("DOMContentLoaded", () => {
    const darkmodeCheckbox = document.getElementById("darkmode");

    darkmodeCheckbox.addEventListener("change", () => {
        if (darkmodeCheckbox.checked) {
            document.body.style.backgroundColor = "#222";
            document.body.style.color = "#eee";
        } else {
            document.body.style.backgroundColor = "#f2f2f2";
            document.body.style.color = "#333";
        }
    });
});
