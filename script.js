function $ (query, root = document) {
  return root.querySelector(query);
}

/** @type {HTMLLIElement} */
let todoItemTemplate = $('template.todo-item').content.firstElementChild;

/** @type {HTMLUListElement} */
let todoList = $('.root .todo-list');
/** @type {HTMLFormElement} */
let todoHeaderForm = $('.root .todo-header');
/** @type {HTMLInputElement} */
let todoHeaderInput = $('.root .todo-header-input');


todoHeaderForm.addEventListener('submit', (ev) => {
  ev.preventDefault();

  let value = todoHeaderInput.value;
  todoHeaderInput.value = '';

  let item = todoItemTemplate.cloneNode(true);
  $('.todo-item-text', item).textContent = value;
  $('.todo-item-actions [data-action="delete"]', item).addEventListener('click', (ev) => {
    item.parentNode.removeChild(item);
  });

  todoList.append(item);
});
