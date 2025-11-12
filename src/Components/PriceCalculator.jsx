import { useState } from "react";

export default function PriceCalculator() {
  const [ingredientCost, setIngredientCost] = useState("");
  const [cookieCount, setCookieCount] = useState("");
  const [profitPercent, setProfitPercent] = useState("");
  const [pricePerCookie, setPricePerCookie] = useState(null);

  const handleCalculate = () => {
    if (!ingredientCost || !cookieCount || cookieCount <= 0) return;

    const costPerCookie = ingredientCost / cookieCount;
    const finalPrice = costPerCookie * (1 + profitPercent / 100);
    setPricePerCookie(finalPrice.toFixed(2));
  };

  const handleReset = () => {
    setIngredientCost("");
    setCookieCount("");
    setProfitPercent("");
    setPricePerCookie(null);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-white text-center px-6">
      <h2 className="text-3xl font-bold text-amber-800 mb-8">
        🍪 Cookie Price Calculator
      </h2>

      <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg border border-amber-100">
        <div className="flex flex-col gap-4 mb-6">
          <input
            type="number"
            placeholder="Total ingredient cost (DA)"
            value={ingredientCost}
            onChange={(e) => setIngredientCost(e.target.value)}
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-amber-500"
          />

          <input
            type="number"
            placeholder="Number of cookies made"
            value={cookieCount}
            onChange={(e) => setCookieCount(e.target.value)}
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-amber-500"
          />

          <input
            type="number"
            placeholder="Desired profit (%)"
            value={profitPercent}
            onChange={(e) => setProfitPercent(e.target.value)}
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-amber-500"
          />
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={handleCalculate}
            className="bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition"
          >
            Calculate
          </button>

          <button
            onClick={handleReset}
            className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition"
          >
            Reset
          </button>
        </div>

        {pricePerCookie && (
          <div className="mt-8 bg-amber-100 rounded-lg p-6 shadow-inner">
            <h3 className="text-2xl font-semibold text-amber-800">
              Suggested Price:
            </h3>
            <p className="text-3xl font-bold text-amber-700 mt-2">
              {pricePerCookie} DA / cookie
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
