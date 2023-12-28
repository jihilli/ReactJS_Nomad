import { useEffect, useState } from "react";

/* Clean Up function : 컴포넌트가 destroy될 때도 함수를 실행하는 법 */

function Hello() {
    // (방법 1)
    useEffect(() => {
        console.log("created(1) :)");
        return () => console.log("bye(1) :(");
    }, []);

    // (방법 2)
    function byFn() {
        console.log("bye(2) :(");
    }

    function hiFn() {
        console.log("created(2) :)");
        return byFn; // destroy될 때 byeFn을 실행
    }

    useEffect(hiFn, []);

    // (방법 3)
    useEffect(() => {
        console.log("hi(3) :)");
        return function () {
            console.log("bye(3) :(");
        };
    }, []);

    // (방법 4) - 가장 많이 쓰임!
    useEffect(() => {
        console.log("hi(4) :)");
        return () => console.log("bye(4) :(");
    }, []);

    return <h1>Hello</h1>;
}

const CleanUp = () => {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev);
    return (
        <div>
            {showing ? <Hello /> : null}
            <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
        </div>
    );
};

export default CleanUp;
