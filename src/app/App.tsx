import * as React from "react";
import { Challange } from "../containers/Challange";
import { Toggle } from "../components/Toggle";
import "./App.css";

function App() {
  return (
    <>
      <Challange />
      <div
        style={{
          alignContent: "center",
          background: "black",
          display: "flex",
          justifyContent: "center",
          padding: "1em",
        }}
      >
        <Toggle
          name="test-toggle"
          options={[
            { id: "1", text: "One" },
            { id: "2", text: "Two" },
          ]}
          onChange={(event) => {
            console.log(event);
          }}
        />
      </div>
    </>
  );
}

export default App;
