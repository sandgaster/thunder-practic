

const child1 = document.getElementsByClassName("child1");

for (let item of child1) {
    item.addEventListener("click", (e) => {
        item.textContent = "Thunder";
        e.target()
    },false);
}