document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".buttons button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let value = this.innerText;

            if (value === "C") display.value = "";
            else if (value === "Del") display.value = display.value.slice(0, -1);
            else if (value === "=") display.value = eval(display.value.replace(/x/g, "*"));
            else display.value += value;
        });
    });
});