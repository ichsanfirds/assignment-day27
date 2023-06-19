import { useState } from "react";
import Assignment1_Child from "./child";

export default function Assignment1() {
    const [inputVal, setInputVal] = useState('')
    const [inputs, setInputs] = useState([])

    const onChangeInput = (event) => {
        setInputVal(event.target.value)
    }

    const onClickTambahArray = () => {
        const arrayBaru = [...inputs, inputVal];
        setInputs(arrayBaru);
    };

  return (
    <div>
      <input className="inputString" value={inputVal} onChange={onChangeInput} placeholder="isi ini!" />
      <button onClick={onClickTambahArray}>Simpan</button>
      <br /><br />
      <Assignment1_Child inputsParent={inputs} setInputsParent={setInputs}/>
    </div>
  );
}
