import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

const App = () => {
    // router 렌더링하기 - url 주소를 보고 렌더링함
    return (
        <Routes>
            {/* Home 렌더링 */}
            <Route path="/" element={<Home />}></Route>
            {/* Detail 렌더링 */}
            <Route path="/movie" element={<Detail />}></Route>
        </Routes>
    );
};

export default App;

/*
    map 함수 : 배열의 각 아이템에 내가 원하는대로 
    [1,2,3,4].map(x => x*2) -> [2,4,6,8]
    */
