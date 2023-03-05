import Header from "./components/Header";
import { createSignal, createEffect } from "solid-js";
import Counter from "./components/Counter";

const App = () => {
  const [count, setCount] = createSignal(0);
  // 2 ways to update the counter value
  const increment = () => setCount(count() + 1);
  const decrement = () => setCount((current) => current - 1);

  // A computed value needs to be an anonymous function to be reactive
  const doubleCount = () => count() * 2;

  createEffect(() => {
    // No dependency array, this effect will run anytime the count changes
    console.log("count changed to: ", count());
  });

  return (
    <>
      <Header />
      <section className="count-container">
        <div>
          <Counter count={count} doubleCount={doubleCount} />
          <div id="actions">
            <button className="btn" onClick={decrement}>
              -
            </button>
            <button className="btn" onClick={increment}>
              +
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
