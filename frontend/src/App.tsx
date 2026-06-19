import './App.css'
import {Card} from "./components/card/Card.tsx";
import type {FoodData} from "./interface/FoodData.ts";

function App() {
  const data: FoodData[] = [];

  return (
    <>
        <h1>Cardápio</h1>
        <div className={"card-grid"}>
          {data.map(foodData =>
              <Card
                  price={foodData.price}
                  title={foodData.title}
                  image={foodData.image}
              />)}
        </div>
    </>
  )
}

export default App
