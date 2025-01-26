const form = document.getElementById("form")
const buttons = document.getElementsByTagName("button")

form.addEventListener("submit", (e) => {
    e.preventDefault()
})

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        e.stopPropagation()
        const currentButton = e.currentTarget;
        const parentWrapper = currentButton.parentElement.parentElement
        const nextParentWrapper = parentWrapper.nextElementSibling
        const previousParentWrapper = parentWrapper.previousElementSibling

        if (currentButton.id === "submit") {
            console.log("saljem formu")
        }
        else if (currentButton.classList.contains("next")) {
            parentWrapper.classList.remove("active");
            nextParentWrapper.classList.add("active")
        } else {
            previousParentWrapper.classList.add("active");
            parentWrapper.classList.remove("active")
        }
    })
})