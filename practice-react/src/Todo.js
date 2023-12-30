import { useState } from "react";

const Todo = () => {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]); // toDo를 여러개 받아줄 배열
    const onChange = (e) => setToDo(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
        if (toDo === "") {
            return;
        }
        setToDos((currentArray) => [toDo, ...currentArray]); // ...currentArray : 해당 배열 안의 element들을 반환함
        // 현재의 toDo를 받아와서, 새로운 array로 리턴함
        setToDo("");
    };
    console.log(toDos);
    return (
        <div>
            <h1>My To Dos ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={toDo} type="text" placeholder="Wrtie your to do..." />
                <button>Add To Do</button>
            </form>
            <hr />
            <ul>
                {toDos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;
