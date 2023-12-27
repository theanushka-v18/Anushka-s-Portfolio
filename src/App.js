import { GlobalStyles } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { useTheme } from "./context/themeContext";
import {useThemeMode} from "./context/themeModeContext";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {

  const {theme} = useTheme();
  const {themeMode} = useThemeMode();
  return (
    <ThemeProvider themeMode={themeMode} theme={theme}>
      <div className="App">
        <GlobalStyles />
        <Routes>
          <Route path='/' element={<HomePage />}>
            <Route path='about' element={<HomePage />} />  
            <Route path='skills' element={<HomePage />} />  
            <Route path='projects' element={<HomePage />} />  
            <Route path='contact' element={<HomePage />} />  
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
