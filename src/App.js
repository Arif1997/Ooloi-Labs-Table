import "./App.css";
import FirstAssignment from "./components/first-assignment";
import { useState, useEffect } from "react";
import Button from "./components/styled-componets/Button";

function App() {
  const [columns, setColumns] = useState({
    all: false,
    option_one: false,
    option_two: false,
  });
  const columnHandler = (e) => {
    const value = e.target.value;
    switch (value) {
      case "none":
        setColumns({
          ...columns,
          all: false,
          option_one: false,
          option_two: false,
        });
        break;
      case "all":
        setColumns({
          ...columns,
          all: true,
          option_one: true,
          option_two: true,
        });
        break;
      case "option_one":
        setColumns({
          ...columns,
          all: true,
          option_one: true,
          option_two: false,
        });
        break;
      case "option_two":
        setColumns({
          ...columns,
          all: true,
          option_two: true,
          option_one: false,
        });
        break;
      default: alert("Wrong button is clicked!")
    }
  };
  useEffect((columns) => {
    setColumns({
      ...columns,
      all: true,
      option_one: true,
      option_two: true,
    });
  }, []);

  return (
    <div className="App">
      <Button  value={"none"} onClick={columnHandler}>
        None
      </Button>
      <Button  value={"all"} onClick={columnHandler}>
        All
      </Button>
      <Button  value={"option_one"} onClick={columnHandler}>
        Button One
      </Button>
      <Button  value={"option_two"} onClick={columnHandler}>
        Button Two
      </Button>
      <FirstAssignment column={columns} />
      {/* It is also possible to pass the configuration value at the second and third call of the component
      manually by giving some properies values instead of changing the states
      Ex: <FirstAssignment column1_display="true" column1_display="true" column2_display="false" column1_display="true"
      and so on /> Writing the logic these props are also higly similar to this   */}
    </div> 
  );
}

export default App;
