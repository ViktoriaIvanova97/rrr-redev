import "./App.css";
import DogsPro from "./DogsPro";
import { ThemeProvider } from "./ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <DogsPro />
    </ThemeProvider>
  );
}

export default App;
