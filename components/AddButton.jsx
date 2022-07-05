import React,{useState} from "react";
import styles from "../styles/Add.module.css";
import Add from "./Add";
function AddButton({pizzaList,setPizzaList}) {
  const [close, setClose] = useState(true);

  return (
    <>
      <div onClick={() => setClose(false)} className={styles.mainAddButton}>
        Add New Pizza
      </div>
      {!close && <Add setClose={setClose} pizzaList={pizzaList} setPizzaList={setPizzaList}/>}
    </>

  );
}

export default AddButton;
