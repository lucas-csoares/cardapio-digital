import {useState, type FormEvent} from "react";
import {useFoodDataMutate} from "../../hooks/useFoodDataMutate.ts";
import type {FoodData} from "../../interface/FoodData.ts";
import "./modal.css"

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}



const Input = ({ label, value, updateValue}: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}


interface CreateModalProps {
    closeModal: () => void;
}


export function CreateModal({ closeModal}: CreateModalProps){
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [feedbackType, setFeedbackType] = useState<'success' | 'error' | null>(null);
    const { mutateAsync, isPending} = useFoodDataMutate();

    const submit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const foodData: FoodData = {
            title: title,
            price: price,
            image: image,
        }

        try {
            await mutateAsync(foodData);
            setFeedbackType('success');
            setFeedbackMessage('Cadastro realizado com sucesso!');
            setTitle('');
            setPrice(0);
            setImage('');
        } catch {
            setFeedbackType('error');
            setFeedbackMessage('Não foi possível realizar o cadastro. Tente novamente.');
        }
    }


    return (
        <>
            <div className="modal-overlay">
                <div className="modal-body">
                    <button
                        className="close-btn"
                        onClick={closeModal}
                        type="button"
                    >
                        ×
                    </button>
                    <h2>Cadastre um novo item no cardápio</h2>
                    <form className={"input-container"} onSubmit={submit}>
                        <Input label="title" value={title} updateValue={setTitle} />
                        <Input label="price" value={price} updateValue={setPrice} />
                        <Input label="image" value={image} updateValue={setImage} />
                        {feedbackMessage && (
                            <p
                                className={`feedback-message ${feedbackType}`}
                                role={feedbackType === 'error' ? 'alert' : 'status'}
                            >
                                {feedbackMessage}
                            </p>
                        )}
                        <button
                            className={"btn-secondary"}
                            disabled={isPending}
                            type="submit"
                        >
                            {isPending ? 'Cadastrando...' : 'Cadastrar'}
                        </button>
                    </form>
                </div>
            </div>
        </>
    )

}
