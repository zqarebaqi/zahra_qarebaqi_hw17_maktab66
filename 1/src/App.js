import "./App.css";
import Allitems from "./components/Allitems";
import Selecteditems from "./components/Selecteditems";

import ContextProvider from "./context/context";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Allitems />
        <Selecteditems />
      </div>
    </ContextProvider>
  );
}

export default App;
