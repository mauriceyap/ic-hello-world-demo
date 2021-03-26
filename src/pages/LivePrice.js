import { useState } from "react";

import { Prices } from "../components/Prices";

export function LivePricePage() {
  const [usd, setUsd] = useState(null);
  const [gbp, setGbp] = useState(null);
  const [eur, setEur] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  function refreshPrices() {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => response.json())
      .then((json) => {
        setUsd(json.bpi.USD.rate);
        setGbp(json.bpi.GBP.rate);
        setEur(json.bpi.EUR.rate);
        setLastUpdated(new Date().toLocaleTimeString());
      });
  }

  return (
    <div>
      <h1>Live Bitcoin price</h1>
      <Prices usd={usd} gbp={gbp} eur={eur} />
      <button onClick={refreshPrices}>Get latest prices</button>
      {lastUpdated && <p>Last updated: {lastUpdated}</p>}
    </div>
  );
}
