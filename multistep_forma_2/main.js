const form = document.getElementById("form")
const buttons = document.getElementsByTagName("button");

form.addEventListener("submit", (e) => {
    e.preventDefault();
})

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        const currentButton = e.currentTarget; 
        const parentWrapper = currentButton.parentElement.parentElement;
        const nextParentWrapper = parentWrapper.nextElementSibling;
        const previousParentWrapper = parentWrapper.previousElementSibling;
    
        if (currentButton.id === "submit") {
            console.log("Form submitted");
        } else if (currentButton.classList.contains("next") && nextParentWrapper) {
            parentWrapper.classList.remove("active");
            nextParentWrapper.classList.add("active");
        } else if (previousParentWrapper) {
            parentWrapper.classList.remove("active");
            previousParentWrapper.classList.add("active");
        }
    });
});
