const comchoise = document.getElementById("computer-choise");
const yourchoise = document.getElementById("user-choise");
const resultdisplay = document.getElementById("result");
const playbutton = document.getElementById("play");

const possiblechoise = ["rock","paper","scissor"];

const choises = document.getElementsByName("choise");

choises.forEach((c) => {
    c.addEventListener('click', () => {
        playbutton.disabled = false;
    });
});

playbutton.addEventListener('click', (e) => {
    const buttonarray = Array.from(choises)
    const selected = buttonarray.filter((b)=> b.checked)
        addTextToSpan(yourchoise, selected[0].id);
        const randomchoise = generatecomputerchoise();
        showresult(selected[0].id, randomchoise);
        e.target.disabled = true;
        choises.forEach((b) => {
            b.checked = false;
        })
});

function addTextToSpan(spanControl, text) {
    spanControl.textContent = text;
}

function generatecomputerchoise() {
    const randomnumber = Math.floor(Math.random() * possiblechoise.length);
    const computerchoise = possiblechoise[randomnumber];
    addTextToSpan(comchoise, possiblechoise[randomnumber])
    return computerchoise;
}

function showresult(userchoise, computerchoise) {
    if(userchoise === computerchoise) {
        addTextToSpan(resultdisplay, 'tied')
    } 
    else if(computerchoise === 'rock') {
        if(computerchoise === 'paper') {
            addTextToSpan(resultdisplay, 'you won')
        }
    }
    else if(userchoise === 'paper') {
        if(computerchoise === 'scissor') {
            addTextToSpan(resultdisplay, 'you lose')
        }
        else if(computerchoise == 'rock') {
            addTextToSpan(resultdisplay, 'you won')
        }
    }
    else if(userchoise === 'scissor') {
        if(computerchoise === 'rock') {
            addTextToSpan(resultdisplay, 'you lose')
        }
        else if(computerchoise == 'paper') {
            addTextToSpan(resultdisplay, 'you won')
        }
    }
}