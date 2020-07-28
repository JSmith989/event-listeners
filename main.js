const firstFunc = (arg) => {
    return `This is a ${arg}`
}



const secondFunc = (arg2) => {
    return `This is another ${arg2}`
}

const thirdFunc = (string3) => {
    return "This is a sentence"
}


const mainButton = document.getElementById('main-btn');

// console.log(mainButton)

const button = document.querySelector(`#main-btn`)

// console.log(button)

const youClickedMe = () => {
    console.log("You clicked me")
}

button.addEventListener ("click", youClickedMe)