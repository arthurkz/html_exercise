const modal = document.querySelector('.modal')
const coursesContent = document.querySelectorAll('.courses_content')

for (let courses of coursesContent){
    const courseID = courses.getAttribute('id')

    courses.style.cursor = 'pointer'

    courses.addEventListener('click', function(){
        modal.classList.add('active')
        modal.querySelector('iframe').src = `https://rocketseat.com.br/${courseID}`
    })
}

document.querySelector('.close_icon').addEventListener('click', function() {
    modal.classList.remove('active')
    modal.classList.remove('maximaze')
    modal.querySelector('iframe').src = ""
})

document.querySelector('.maximaze_icon').addEventListener('click', function() {
    modal.classList.add('maximaze')
})