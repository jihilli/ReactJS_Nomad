/* 
    state가 변화할 때 모든 컴포넌트가 다시 렌더링되는 문제! 
    특정 코드들이 첫번째 컴포넌트 렌더링에서만 실행되게 하는 법 (ex. API 처음에 한 번만 불러오기)
    => useEffect(effect, dependencies) 
        1) effect : 실행할 코드 
        2) dependencies : react.js가 지켜보아야 하는 것 - 이게 변화할 때 effect를 다시 실행함
*/
import { useEffect, useState } from "react";

import styles from "./App.module.css";
import Button from "./Button";

function App() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClick = () => setValue((prev) => prev + 1);
    const onChange = (event) => setKeyword(event.target.value);

    console.log("I run all the time");

    // 1. 최초의 컴포넌트 렌더링 때만 실행되고, 다신 실행되지 않을 함수 넣어줄 것
    useEffect(() => {
        console.log("I run only once");
    }, []); // -> dependencies가 없기 때문에, 코드는 처음에 단 한 번만 실행됨!

    // 2. Keyword가 변화할 때만 실행하기 (counter가 변화할 때는 말고!)
    useEffect(() => {
        if (keyword !== "" && keyword.length > 0) {
            console.log("I run when 'keyword' changes");
        }
    }, [keyword]); // -> [keyword] : keyword가 변화할 때만, 이 코드를 실행하기

    // 3. counter가 변화할 때만, 이 코드를 실행하기
    useEffect(() => {
        console.log("I run when 'counter' changes");
    }, [counter]);

    // 4. counter나 keyword가 변화할 때, 이 코드를 실행하기
    useEffect(() => {
        console.log("I run when 'keyword & counter' changes");
    }, [keyword, counter]);

    return (
        <div className="App">
            <div>
                <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
                <h1>{counter}</h1>
                <button onClick={onClick}>Click me</button>
            </div>
            <hr />

            <div>
                <h1 className={styles.title}>Welcome back!</h1>
                <Button text={"Continue"} />
            </div>
        </div>
    );
}

export default App;
