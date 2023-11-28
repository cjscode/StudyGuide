const questions = [
    {
        "q":"Why was the Declaration of Independence Written? What did it say?",
        "a":"They wanted to declare independence from England."
    },
    {
        "q":"Who (primarily) wrote the Declaration of Independence?",
        "a":"Thomas Jefferson."
    },
    {
        "q":"What type of Government did our founders NOT want?",
        "a":"Monarchy."
    },
    {
        "q":"What was the Articles of Confederation?",
        "a":"It was our first Government"
    },
    {
        "q":"How did the Articles of Confederation work?",
        "a":"The Government could wage war, make peace, sign treaties, issue treaties, and the states could do the rest."
    },
    {
        "q":"What could the National Government do?",
        "a":"Wage war, Make Peace, Sign Treaties, Issue Money."
    },
    {
        "q":"What were some of the weaknesses of the Articles of Confederation?",
        "a":"National Government couldn't enforce laws, tax, draft an army, and more."
    },
    {
        "q":"Under the Articles of Confederation, did the state or Fed. Government have more power.",
        "a":"The states had the most power."
    },
    {
        "q":"What was Shays' rebellion?",
        "a":"It was when Farmers were upset about high taxes. If they could not pay these taxes, they were put in jail."
    },
    {
        "q":"What was the long term effect of the Articles of Confederation?",
        "a":"It had weakened the Government and had weakened the economy and law system."
    },
    {
        "q":"How many states had to agree to change the Articles of Confederation?",
        "a":"All of 13 them."
    },
    {
        "q":"What did delegates from the 12 states end up creating in Philadelphia thhe summer of 1787?",
        "a":"The Articles of Confederation."
    },
    {
        "q":"Why was James Madison an important delegate at the Constitiutional Convention?",
        "a":"He was important because he took many detailed notes."
    },
    {
        "q":"Why was George Washington an important delegate at the Constitiutional Convention?",
        "a":"He was the president of the Convention."
    },
    {
        "q":"Why did some states like the Virginia Plan?",
        "a":"Larger states enjoyed this plan as would give them more power over the smaller states."
    },
    {
        "q":"Why did some states like the New Jersey Plan?",
        "a":"Smaller states enjoyed this plan as it would give the larger states less power."
    },
    {
        "q":"What was the 'Great Comprimise'? How did it work?",
        "a":"It was a mix of the two plans. It included a bit of the Virginia plan and the New Jersey plan."
    },
    {
        "q":"What was the 3/5 Comprimise?",
        "a":"It was where Slaves were worth 3/5 of a person. This is because states with high Slave population wanted more power, while small states did not like this."
    },
    {
        "q":"What is Federalism?",
        "a":"A system of Government in which the powers are shared between states and the Government"
    },
    {
        "q":"What did Anti-Federalists think of the Constitution?",
        "a":"They wanted the states to have the most power. They also feared that a single person from the Executive branch might become a tyrant."
    },
    {
        "q":"What did Federalists think of the Constitution?",
        "a":"They wanted the Constitiution to pass as it is. They also supported taking powers from the states and giving them to the Government"
    },
    {
        "q":"What is the Bill of Rights?",
        "a":"It is the first 10 ammendments added to the Constitiution, added so the Constitiution would be ratified, and ensures personal rights to each U.S. Citizen."
    },
    {
        "q":"What is a republic?",
        "a":"A Government in which people elect representatives."
    }
]
let current = {
    q: "",
    a: ["","","",""],
    n: 0
}
let data = {
    c: 0,
    t: 0
}
data = localStorage.getItem("data") == null ? data : JSON.parse(localStorage.getItem("data"))
let clicked = false
let buttons = document.querySelectorAll(".answer")
function newQuestion () {
    localStorage.setItem("data",JSON.stringify(data))
    clicked = false
    document.querySelector("#amount").textContent = `${data.c}/${data.t}`
    document.querySelector("#percent").textContent = `${data.t == 0 ? "0" : Math.round((data.c/data.t)*100)}%`
    let v = Math.floor(Math.random()*questions.length)
    let x = questions[v]
    current.q = x.q
    document.querySelector("#question").textContent = current.q
    let placeholder = questions.slice()
    placeholder.splice(v,1)
    let g = Math.floor(Math.random()*4)
    current.a[g] = x.a
    current.n = g
    for (let i = 0; i < 4; i++) {
        if (!(i == g)) {
            let r = Math.floor(Math.random()*placeholder.length)
            current.a[i] = placeholder[r].a
            placeholder.splice(r,1)
        }
        buttons[i].style.opacity = "1"
        buttons[i].style.backgroundColor = "rgb(235,235,235)"
        document.querySelector(`#a${i}`).textContent = current.a[i]
    }
}
function handleClick (x) {
    if (clicked) {
        return
    }
    clicked = true
    for (let i = 0; i < buttons.length; i++) {
        if (i == current.n) {
            buttons[i].style.backgroundColor = "green"
        } else {
            buttons[i].style.backgroundColor = "red"
        }
        if (i == x) {
            buttons[i].style.opacity = "1"
        } else {
            buttons[i].style.opacity = "0.5"
        }
    }
    if (x == current.n) {
        data.c += 1
    }
    data.t += 1
    setTimeout(newQuestion,2500)
}
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click",function () {
        handleClick(i)
    })
}
newQuestion()
window.onerror = function (e) {
    alert(e)
}