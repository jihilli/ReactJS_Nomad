import { useEffect, useState } from "react";

const CoinTracker = () => {
    const [loading, setLoading] = useState(true);

    // api로 받아온 데이터를 useState에 넣어주기!
    const [coins, setCoins] = useState([]);
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            });
    }, []); // []가 비어있기 때문에, 컴포넌트 렌더링 처음에만 실행

    const [usd, setUsd] = useState(0);
    const [budget, setBudget] = useState(0);

    const onChange = (e) => setUsd(e.target.value);
    const onClick = (e) => {
        setBudget(usd);
    };

    const handleSelection = (e) => {
        setSelected(e.target.value);
    };
    return (
        <div>
            <h1>The Coins! {loading ? "" : `(${coins.length})`} </h1>
            {loading ? (
                <strong>Loading...</strong>
            ) : (
                <div>
                    <input onChange={onChange} type="number" placeholder="your USD" />
                    <select id="select" onChange={handleSelection}>
                        {coins.map((item, index) => (
                            <option key={index} value={item.quotes.USD.price}>
                                {item.name} ({item.symbol}) : {item.quotes.USD.price} USD
                            </option>
                        ))}
                    </select>
                    <button onClick={onClick}>계산하기</button>
                    <p>{budget / selected}</p>
                </div>
            )}
            {/* <ul>
                {coins.map((coin, index) => (
                    <li key={index}>
                        {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
                    </li>
                ))}
            </ul> */}
        </div>
    );
};

export default CoinTracker;
