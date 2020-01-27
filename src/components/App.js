import React, { useState } from 'react';
import shorid from 'short-id';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const [text, setText] = useState('');

  const saveText = e => {
    setText(e.target.value);
  };

  const [arr, setArr] = useState([]);

  const addForm = e => {
    e.preventDefault();
    const oneForm = {
      id: shorid.generate(),
      wrotenText: text,
    };
    setTimeout(() => {
      setArr(prevArr => [...prevArr, oneForm]);
    }, 3000);
    setText('');
  };
  return (
    <>
      <button onClick={increment} type="button">
        {count}
      </button>

      <form onSubmit={addForm}>
        <input type="text" value={text} onChange={saveText} />
        <p>{text}</p>
        <button type="submit">Save</button>
      </form>

      {arr.length > 0 && (
        <ul>
          {arr.map(({ id, wrotenText }) => (
            <li key={id}>
              <span>{wrotenText}</span>
              <button type="submit">Delete</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default App;
