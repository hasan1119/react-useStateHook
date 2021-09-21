import { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const [value, setValue] = useState(0);
  return (
    <div className="App">
          <h2>Let's Practice 'useState' hook</h2>
      <div className="d-flex w-100 justify-content-center align-items-center vh-100">
        <div>

          <h1>{value}</h1>
          <div className="d-flex flex-direction-column">
            <button
              onClick={() => {
                setValue(value + 1);
              }}
              className="btn btn-primary d-flex justify-content-center align-items-center"
              style={{
                fontSize: "30px",
                marginRight: "15px",
                cursor: "pointer",
                width: "55px",
              }}
            >
              +
            </button>

            <button
              onClick={() => {
                if (value > 0) {
                  setValue(value - 1);
                }
              }}
              className="btn btn-primary d-flex justify-content-center align-items-center"
              style={{
                fontSize: "30px",
                cursor: "pointer",
                width: "55px",
              }}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
