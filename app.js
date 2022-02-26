const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value)

  if(e.key === 'Enter'){
    setTimeout(() => {
      e.target.value = ''
    }, 10)

    randomSelect()
  }
})

function createTags(input){
  const tags = input.split(',').map(tag => tag.trim()).filter(tag => tag !== '')
  
  tagsEl.innerHTML = ''

  tags.forEach(tag => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerText = tag
    tagsEl.appendChild(tagEl)
  })
}

function randomSelect(){
  const times = 30

  const interval = setInterval(() => {
    const randomTag = pickRandomTag()
    randomTag.classList.add('highlight')
    setTimeout(() =>{
      randomTag.classList.remove('highlight')
    },100)
  },100)

  setTimeout(() => {
    clearInterval(interval)

    setTimeout(() => {
      const randomTag = pickRandomTag()
      randomTag.classList.add('highlight')
    },100)
  },100*times)

}

function pickRandomTag(){
  const tagEls = document.querySelectorAll('.tag')
  return tagEls[Math.floor(Math.random()*tagEls.length)]
}