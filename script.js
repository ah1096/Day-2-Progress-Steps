const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

const egg = document.getElementById('egg1')
const bulbasaur = document.getElementById('bulba2')
const ivysaur = document.getElementById('ivy3')
const venusaur = document.getElementById('venus4')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    circles.forEach((circle, ind) => {
        if(ind < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(currentActive === 1){
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }

    if (currentActive === 1){
        egg.classList.add('visible')
        bulbasaur.classList.remove('visible')
        ivysaur.classList.remove('visible')
        venusaur.classList.remove('visible')
    } else if (currentActive === 2){
        egg.classList.remove('visible')
        bulbasaur.classList.add('visible')
        ivysaur.classList.remove('visible')
        venusaur.classList.remove('visible')
    } else if (currentActive === 3){
        egg.classList.remove('visible')
        bulbasaur.classList.remove('visible')
        ivysaur.classList.add('visible')
        venusaur.classList.remove('visible')
    } else {
        egg.classList.remove('visible')
        bulbasaur.classList.remove('visible')
        ivysaur.classList.remove('visible')
        venusaur.classList.add('visible')
    };
}