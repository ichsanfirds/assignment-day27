export default function Assignment1_Child({ inputsParent, setInputsParent }) {

  const onClickDelete = (clickDelete) => {
    const deleteInput = inputsParent.filter((existingInput) => existingInput != clickDelete);
    setInputsParent(deleteInput);
  };

  return (
    <div>
      <ul>
        {inputsParent.map((item) => (
          <li>
            {item}
            <button className="buttonDelete" onClick={() => onClickDelete(item)}>X</button>
            <br /><br />
          </li>
        ))}
      </ul>
    </div>
  );
}
