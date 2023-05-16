import { useEffect, useState } from "react";

function Todo() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    setToDos((current) => [...current, toDo]);
    setToDo("");
  };
  function handleTodoDeletion(index) {
    setToDos(toDos.filter((item, todoindex) => index !== todoindex));
  }
  console.log(toDos);
  return (
    <>
      <h1>My To Dos ({toDos.length})</h1>
      <ul>
        {toDos.map((todos, index) => (
          <li key={index}>
            {todos}
            <button onClick={() => handleTodoDeletion(index)}>삭제</button>
          </li>
        ))}
      </ul>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..." />
        <button>Add To Do</button>
      </form>
    </>
  );
}

export default Todo;
