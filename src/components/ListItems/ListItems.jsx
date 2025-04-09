import { useState, useEffect } from "react";

const ListItems = () => {

    const [items, setItems] = useState(['Элемент 1', 'Элемент 2',]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        console.log('компонент обновлен');
    }, []);

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }
    const addItem = () => {
        if (!inputValue.trim()) {
            return;
        }
        setItems(prevItems => [...prevItems, inputValue])
        setInputValue('');
    }

    const elements = items.map(item => <li key={item}>{item}</li>)
    return (
        <div>
            <input onChange={handleChange} value={inputValue} type="text" name="elementAdd" placeholder="Введите элемент списка" />
            <button onClick={addItem}>Добавить</button>
            <ul>
                <h3>Список элементов</h3>
                {elements}
            </ul>
        </div>
    );
};

export default ListItems;