import { useEffect, useState } from "react";

function CoinTracker() {
  const [loading, setLoading] = useState(true);

  const [coins, setCoins] = useState([]);

  const [dollor, setDollor] = useState(0);
  const [cost, setCost] = useState(0);

  const onChange = (e) => setDollor(e.target.value);
  const selectOnChange = (e) => setCost(e.target.value);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <h1>The Coins!</h1>
      <h2>{loading ? "Loading..." : null}</h2>
      <select onChange={selectOnChange}>
        {coins.map((coin) => (
          <option key={coin.id} value={coin.quotes.USD.price}>
            {coin.name}({coin.symbol}) : ${coin.quotes.USD.price}
          </option>
        ))}
      </select>
      <h3>몇 달러로 어느정도의 코인을 살 수 있는지 알려드립니다.</h3>
      <input type="number" placeholder="dollor $" onChange={onChange} value={dollor} />
      <h4>{dollor ? dollor / cost : null}</h4>
    </>
  );
}

export default CoinTracker;
