const input = document.getElementById('itemInput');
const addBtn = document.getElementById('addBtn');
const container = document.getElementById('container');

// 문항 1: 아이템 생성 및 #container에 appendChild
function addItem() {
  const text = input.value.trim();

  // 문항 1: 빈 값 입력 방지
  if (text === '') {
    alert('항목을 입력해주세요.');
    input.focus();
    return;
  }

  // 아이템 div 생성
  const item = document.createElement('div');
  item.className = 'item';

  // 텍스트 span
  const span = document.createElement('span');
  span.textContent = text;

  // 문항 2: 삭제(X) 버튼 생성
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = '✕';

  // 문항 2: 클릭 시 해당 div를 #container에서 제거
  deleteBtn.addEventListener('click', function () {
    container.removeChild(item);
  });

  item.appendChild(span);
  item.appendChild(deleteBtn);

  // 문항 1: #container에 appendChild
  container.appendChild(item);

  input.value = '';
  input.focus();
}

// 추가 버튼 클릭
addBtn.addEventListener('click', addItem);

// 문항 1: Enter 키로도 추가 가능
input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    addItem();
  }
});
