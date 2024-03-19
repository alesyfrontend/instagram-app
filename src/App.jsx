import { ThemeProvider } from "styled-components";
import { Screen } from "./style";
import {darkTheme, lightTheme} from "./style/theme";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
        <Screen>
      
            <h1>Hello world </h1>
              
        </Screen>

  </ThemeProvider>  

  );
}

export default App;
