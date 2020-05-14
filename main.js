const hexCode = document.getElementById("hexCode");
const generateBtn = document.getElementById("generate");

const generateColor = () => {
    const randomColor =
        "#" +
        Math.floor(Math.random() * 16777215)
            .toString(16)
            .toUpperCase();
    hexCode.innerHTML = randomColor;
    document.body.style.background = randomColor;
};
