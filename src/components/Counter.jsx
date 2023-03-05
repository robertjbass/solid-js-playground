// Don't destruct props in the function signature because it will break the reactivity
const Counter = (props) => {
  const { count, doubleCount } = props;
  return (
    <div id="counter">
      {count()} x 2 = {doubleCount()}
    </div>
  );
};

export default Counter;
