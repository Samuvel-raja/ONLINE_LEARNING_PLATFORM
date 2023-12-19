const in1 = document.querySelector(".in-1")
const in2 = document.querySelector(".in-2")
const in3 = document.querySelector(".in-3")
const in4 = document.querySelector(".in-4")
const in5 = document.querySelector(".in-5")
const in6 = document.querySelector(".in-6")
const in7 = document.querySelector(".in-7")
const in8 = document.querySelector(".in-8")
const in9 = document.querySelector(".in-9")
const in10 = document.querySelector(".in-10")
const in11 = document.querySelector(".in-11")
const in12 = document.querySelector(".in-12")
const btn1 = document.querySelector(".sb1")
const btn2 = document.querySelector(".sb2")
const btn3 = document.querySelector(".sb3")
const btn4 = document.querySelector(".sb4")
const btn5 = document.querySelector(".sb5")
const btn6 = document.querySelector(".sb6")
const btn7 = document.querySelector(".sb7")
const btn8 = document.querySelector(".sb8")
const btn9 = document.querySelector(".sb9")

let c=0
let c1=0
let c2=0
btn1.addEventListener('click', (e) => {
    e.preventDefault()
    let val1 = in1.value
    if (val1 == "p") {
        btn1.innerHTML = "Correct"
        btn1.classList = "correct"
        c+=1
        console.log(c)
    }
    else
       { btn1.innerHTML = "Wrong"
       btn1.classList = "wrong"}

})
btn2.addEventListener('click', (e) => {
    e.preventDefault()
    let val2 = in2.value
    if (val2 == "/button") {
        btn2.innerHTML = "Correct"
        btn2.classList = "correct"
        c+=1
        console.log(c)
    }
    else
        {btn2.innerHTML = "Wrong"
        btn2.classList = "wrong"}

})
btn3.addEventListener('click', (e) => {
    e.preventDefault()
    let val3 = in3.value
    let val4 = in4.value
    if (val3 == "style" && val4 == "/style") {
        btn3.innerHTML = "Correct"
        btn3.classList = "correct"
        c+=1
        if(c==3)
alert("You have completed the HTML task")
    }
    else
    {
        btn3.innerHTML = "Wrong"
        btn3.classList = "wrong"
    }
})
btn4.addEventListener('click', (e) => {
    e.preventDefault()
    let val5 = in5.value
    if (val5 == "color") {
        btn4.innerHTML = "Correct"
        btn4.classList = "correct"
        c1+=1
        console.log(c)
    }
    else
    { btn4.innerHTML = "Wrong"
    btn4.classList = "wrong"}

})
btn5.addEventListener('click', (e) => {
    e.preventDefault()
    let val6 = in6.value
    let val7 = in7.value
    let val8 = in8.value
    if (val6== "image" && val7=="url(" && val8==")") {
        btn5.innerHTML = "Correct"
        btn5.classList = "correct"
        c1+=1
        console.log(c)
    }
    else
    { btn5.innerHTML = "Wrong"
        btn5.classList = "wrong"}

})
btn6.addEventListener('click', (e) => {
    e.preventDefault()
    let val9 = in9.value
    if (val9 == "border") {
        btn6.innerHTML = "Correct"
        btn6.classList = "correct"
        c1+=1
        if(c1==3)
        alert("You have completed the CSS task")
    }
    else
       { btn6.innerHTML = "Wrong"
        btn6.classList = "wrong"}

})
btn7.addEventListener('click', (e) => {
    e.preventDefault()
    let val10 = in10.value
    if (val10 == "Click") {
        btn7.innerHTML = "Correct"
        btn7.classList = "correct"
        c2+=1
        console.log(c)
    }
    else
    { btn7.innerHTML = "Wrong"
    btn7.classList = "wrong"}

})
btn8.addEventListener('click', (e) => {
    e.preventDefault()
    let val11 = in11.value
    if (val11 == "onClick") {
        btn8.innerHTML = "Correct"
        btn8.classList = "correct"
        c2+=1
        console.log(c)
    }
    else
    { btn8.innerHTML = "Wrong"
    btn8.classList = "wrong"}

})

btn9.addEventListener('click', (e) => {
    e.preventDefault()
    let val12 = in12.value
    if (val12 == "onChange") {
        btn9.innerHTML = "Correct"
        btn9.classList = "correct"
        c2+=1
        console.log(c)
        if(c2==3)
        alert("You have completed the Js task")
    }
    else
    { btn9.innerHTML = "Wrong"
    btn9.classList = "wrong"}

})
