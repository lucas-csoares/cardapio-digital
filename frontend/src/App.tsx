import './App.css'
import {Card} from "./components/card/Card.tsx";
import {useFoodData} from "./hooks/useFoodData.ts";

function App() {
  const { data } =  useFoodData();

  return (
    <>
        <h1>Cardápio</h1>
        <div className={"card-grid"}>
          {data?.map(foodData =>
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
