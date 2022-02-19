const toggleSwitch = document.querySelector("input[type='checkbox']");
const nav = document.querySelector("#nav");
const image1 = document.querySelector("#image1");
const image2 = document.querySelector("#image2");
const image3 = document.querySelector('#image3');
const textBox = document.querySelector("#text-box");

imageMode=(color)=>{
    image1.src =`img/undraw_proud_coder_${color}.svg`;
    image2.src =`img/undraw_feeling_proud_${color}.svg`;
    image3.src =`img/undraw_conceptual_idea_${color}.svg`;
}

darkMode=()=>{
    document.documentElement.setAttribute('data-theme','dark');
    nav.style.backgroundColor='rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor= 'rgb(255 255 255 / 50%)';
    imageMode('dark');
    localStorage.setItem('theme','dark');
    toggleSwitch.checked=true;
}

lightMode=()=>{
    document.documentElement.setAttribute('data-theme','light');
    nav.style.backgroundColor='rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor= 'rgb(0 0 0 / 50%)';
    imageMode("light");
    localStorage.setItem('theme','light');
}

switchTheme=(e)=>{
    e.target.checked?darkMode():lightMode();
}

toggleSwitch.addEventListener("change",switchTheme);

const currTheme = localStorage.getItem('theme');
currTheme?(currTheme==='dark'?darkMode():lightMode()):localStorage.setItem('theme','light');