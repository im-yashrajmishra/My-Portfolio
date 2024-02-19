function typingEffect() {
    const phrases = ["Frontend Developer Roles", "Java Developer Roles"];
    const element = document.getElementsByClassName("typing-effect")[0];
    let currentPhraseIndex = 0;
    let i = 0;
    let direction = 1;

    function updateText() {
        element.textContent = phrases[currentPhraseIndex].substring(0, i);
    }

    function animateText() {
        i += direction;
        updateText();

        if (i === phrases[currentPhraseIndex].length + 1) {
            direction = -1;
            setTimeout(animateText, 1000);
        } else if (i === 0) {
            direction = 1;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            setTimeout(animateText, 500);
        } else {
            setTimeout(animateText, 100);
        }
    }

    animateText();
}
typingEffect();


function rotateImage(){
    const element = document.getElementsByClassName("about-card")[0];
    element.style.transform = "rotateY(180deg)";
    element.style.boxShadow = "0px 0px 10px 4px var(--var5)";
    setTimeout(()=>{
        element.style.transform = "rotateY(0deg)";
        element.style.boxShadow = "none";
    },4000);
}


function hamburgerMenu(){
    const element1 = document.querySelector("header").children[1];
    const element2 = document.querySelector("header").children[2];
    const str = element2.style.display;
    if(str == "")
    {
        element2.style.display = "flex";
        element1.src = "images/close.png";
    }
    else
    {
        element2.style.display = null;
        element1.src = "images/hamburgerIcon.png";
    }
}
function scrollToSection(s){
    const element = document.getElementById(`${s}`);
    let topValue = window.scrollY;
    function scrollAnimation1(){
        if(topValue<(element.offsetTop-92))
        {
            window.scrollTo({
                top: topValue,
                behaviour: 'smooth'
            });
            topValue = topValue+20;
            requestAnimationFrame(scrollAnimation1);
        }
        else
        {
            window.scrollTo({
                top: (element.offsetTop-92),
                behaviour: 'smooth'
            });
        }
    }
    function scrollAnimation2(){
        if(topValue>(element.offsetTop-92))
        {
            window.scrollTo({
                top: topValue,
                behaviour: 'smooth'
            });
            topValue = topValue-20;
            requestAnimationFrame(scrollAnimation2);
        }
        else
        {
            window.scrollTo({
                top: (element.offsetTop-92),
                behaviour: 'smooth'
            });
        }
    }
    if(topValue<(element.offsetTop))
    {
        scrollAnimation1();
    }
    if(topValue>(element.offsetTop))
    {
        scrollAnimation2();
    }
}


function skillAnimation(){
    const elementArray1 = document.getElementsByClassName("technical-skill");
    const elementArray2 = document.getElementsByClassName("soft-skill");
    for(let i of Object.values(elementArray1))
    {
        const str1 = i.children[0].children[1].textContent;
        animateSkill1(i.children[1].children[0], Number.parseInt(str1.substring(0,2)));
    }
    for(let j of Object.values(elementArray2))
    {
        const str2 = j.children[0].children[0].children[0].textContent;
        animateSkill2(j.children[0], Number.parseInt(str2.substring(0,2)));
    }
}

function animateSkill1(element, s){
    let c=1;
    const t = setInterval(() => {
        element.style.width = `${c++}%`;
        if(c==s)
        {
            clearInterval(t);
        }
    }, 20);
}

function animateSkill2(element, s){
    let c=1;
    const t = setInterval(() => {
        if((3.6*c)<=180)
        {
            element.style.backgroundImage = `conic-gradient(var(--var4) ${3.6*(100-c)}deg, var(--var1) ${3.6*c}deg)`;
            element.style.transform = `rotate(${(3.6*c)}deg)`;
            element.children[0].style.transform = `rotate(${-(3.6*c)}deg)`;
        }
        else
        {
            element.style.backgroundImage = `conic-gradient(var(--var1) ${3.6*c}deg, var(--var4) ${3.6*(100-c)}deg)`;
            element.style.transform = "none";
            element.children[0].style.transform = "none";
        }

        console.log(element.style.backgroundImage);
        c=c+1;
        if(c==(s+1))
        {
            clearInterval(t);
        }
    }, 20);
}

skillAnimation();