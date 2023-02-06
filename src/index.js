document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('new-task-description');
    handleNewTask(input.value);
    form.reset()
  });
});

function handleNewTask(newTask){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  p.textContent = `${newTask} `
  p.appendChild(btn)
  console.log(p)
  document.querySelector('#list').appendChild(p)
}

function handleDelete(e){
e.target.parentNode.remove()
}