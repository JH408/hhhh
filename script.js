function addTodo() {
  // id가 'todoInput'인 입력창 요소를 가져옵니다.
  const todoInput = document.getElementById('todoInput');
  // id가 'todoList'인 ul 요소를 가져옵니다.
  const todoList = document.getElementById('todoList');
  // 입력창의 값(텍스트)을 가져오고 앞뒤 공백을 제거합니다.
  const todoText = todoInput.value.trim();

  // 입력된 텍스트가 비어 있는지 확인합니다.
  if (todoText === '') {
    alert('할 일을 입력해주세요!'); // 비어 있으면 경고
    return; // 함수 실행 중단
  }

  // 새로운 목록 항목 (<li>) 요소를 만듭니다.
  const listItem = document.createElement('li');
  // 만든 li 요소에 'todo-item' 클래스를 추가합니다 (CSS 스타일 적용).
  listItem.classList.add('todo-item');
  // li 요소의 내용(텍스트)을 사용자가 입력한 할 일 텍스트로 설정합니다.
  listItem.textContent = todoText;

  // 할 일 목록 (id가 'todoList'인 ul)의 마지막에 새로 만든 li 요소를 추가합니다.
  todoList.appendChild(listItem);

  // 할 일 입력창의 내용을 비워서 다음 할 일을 쉽게 입력할 수 있도록 합니다.
  todoInput.value = '';
  // 입력창에 포커스를 두어 바로 다음 입력을 할 수 있게 합니다.
  todoInput.focus();
}

// (선택 사항) 입력창에서 Enter 키를 눌렀을 때도 할 일 추가 함수가 실행되도록 합니다.
document.getElementById('todoInput').addEventListener('keypress', function(event) {
  // 눌린 키가 Enter 키인지 확인합니다.
  if (event.key === 'Enter') {
    event.preventDefault(); // Enter 키의 기본 동작(예: 폼 제출)을 막습니다.
    addTodo(); // 할 일 추가 함수를 호출합니다.
  }
});
