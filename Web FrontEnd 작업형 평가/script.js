const input = document.getElementById('itemInput');
const addBtn = document.getElementById('addBtn');
const container = document.getElementById('container');

function addItem() {
  const value = input.value.trim();

  if (value === '') {
    alert('내용을 입력해주세요.');
    input.focus();
    return;
  }

  const item = document.createElement('div');
  item.classList.add('item');

  const text = document.createElement('span');
  text.textContent = value;

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('deleteBtn');
  deleteBtn.textContent = '✕';
  deleteBtn.addEventListener('click', () => {
    container.removeChild(item);
  });

  item.appendChild(text);
  item.appendChild(deleteBtn);
  container.appendChild(item);

  input.value = '';
  input.focus();
}

addBtn.addEventListener('click', addItem);

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addItem();
  }
});
