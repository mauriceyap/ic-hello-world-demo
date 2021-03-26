import "./prices.css";

export function Prices(props) {
  const { usd, gbp, eur } = props;

  if (!usd && !gbp && !eur) {
    return (
      <div>
        <p>No pricing available.</p>
      </div>
    );
  }
  return (
    <div>
      <p>${usd}</p>
      <p>£{gbp}</p>
      <p className="euro-price">€{eur}</p>
    </div>
  );
}
