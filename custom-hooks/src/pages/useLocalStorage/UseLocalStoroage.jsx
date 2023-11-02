import { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

const buttonsProps = {
  display: "flex",
  gap: "2rem",
};

const UseLocalStoroage = () => {
  const [value, setValue] = useState("");
  const [key, setKey] = useState("");
  const [valueGetted, setValueGetted] = useState("");

  const { setItem, getItem, removeItem } = useLocalStorage(key);

  return (
    <div>
      <div>
        <div>
          <input
            type="text"
            placeholder="key"
            onChange={(e) => setKey(e.target.value)}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="value"
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <br />
        <div style={buttonsProps}>
          <button onClick={() => setItem(value)}>Save</button>
          <button
            onClick={() => {
              const item = getItem(key);
              if (item) {
                console.log("There is no value for key " + key);
              }
              setValueGetted(item);
            }}
          >
            Get
          </button>
          <button onClick={() => removeItem(key)}>Remove</button>
        </div>
        <br />
        <div>Value getted from getItem(): {valueGetted}</div>
      </div>
    </div>
  );
};

export default UseLocalStoroage;
