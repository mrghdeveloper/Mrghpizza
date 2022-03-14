import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard"

const PizzaList = ({pizzaList}) => {
  return (
    <div id="pizzaMenu" className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
      It might be cold outside, but MRGH Pizza is bringing the heat with new keto pizzas!
      </p>
      <div className={styles.wrapper}>
          {pizzaList.map((pizza) => (
            <PizzaCard key={pizza._id} pizza={pizza}/>
          ))}
      </div>
    </div>
  );
};

export default PizzaList;