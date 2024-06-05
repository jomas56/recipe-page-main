import "./App.css";
import styles from "./styles/App.module.scss";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import ImageComponent from "./components/ImageComponent/ImageComponent";
import ListComponent from "./components/ListComponent/ListComponent";
import RowTableComponent from "./components/RowTableComponent/RowTableComponent";
import omelette from "./assets/images/image-omelette.jpeg";
import {
  omeletteRecipeHeader,
  prepationTimeHeader,
  ingredientsHeader,
  nutritionHeader,
  instructionHeader,
} from "./components/HeaderComponent/HeaderComponent.storyData";
import {
  listOfPreparationTime,
  listOfInstructions,
  listOfIngredients,
} from "./components/ListComponent/ListComponent.storyData";
import { nutritionalData } from "./components/RowTableComponent/RowTableComponent.storyData";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.wrapper}>
        <ImageComponent image={omelette} />
        <HeaderComponent {...omeletteRecipeHeader} />
        <div className={styles.innerContainer}>
          <HeaderComponent {...prepationTimeHeader} />
          <ListComponent {...listOfPreparationTime} />
        </div>
        <HeaderComponent {...ingredientsHeader} />
        <ListComponent {...listOfIngredients} />
        <div className={styles.spacer} />
        <HeaderComponent {...instructionHeader} />
        <ListComponent {...listOfInstructions} />
        <div className={styles.spacer} />
        <HeaderComponent {...nutritionHeader} />
        <RowTableComponent {...nutritionalData} />
      </div>
    </div>
  );
}

export default App;
