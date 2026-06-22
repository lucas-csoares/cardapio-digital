import './App.css'
import {Card} from "./components/card/Card.tsx";
import {useFoodData} from "./hooks/useFoodData.ts";
import {useState} from "react";
import {CreateModal} from "./components/create-modal/create-modal.tsx";

function App() {
  const { data } =  useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
      setIsModalOpen(prev => !prev);
  }

  return (
    <>
        <div className={'container'}>
            <h1>Cardápio</h1>
            <div className={"card-grid"}>
                {data?.map(foodData =>
                    <Card
                        price={foodData.price}
                        title={foodData.title}
                        image={foodData.image}
                    />)}
            </div>
            {isModalOpen && (
                <CreateModal
                    closeModal={() => setIsModalOpen(false)}
                />
            )}
            <button onClick={handleOpenModal}>novo</button>
        </div>
    </>
  )
}

export default App
