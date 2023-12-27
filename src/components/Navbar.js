import Select from "react-select";
import {themeOptions} from "../utils/themeOptions"; 
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {useTheme} from "../context/themeContext";
import {useThemeMode} from "../context/themeModeContext";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const {theme, setTheme} = useTheme();
  const {themeMode, setThemeMode} = useThemeMode();

    const handleChange = (e) => {
      console.log(e);
        setTheme(e.value);
        localStorage.setItem('theme', JSON.stringify(e.value));

          if((e.label=='Blue' || e.label=='Pink' || e.label=='Yellow' || e.label=='Green' || e.label=='Purple')) {
              setThemeMode(false);
          }

          if(e.label=='Dark' || e.label=='Light') {
            setThemeMode(prev => !prev);
          }
    }

  return (
    <section className="navbar-container">
        <div className="navbar">
        <div className="logo"><p style={{fontStyle: 'italic'}}>{`<theanushka_v18 />`}</p></div>
        <div className="nav-container"> 
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/about'>About</NavLink></li>
              <li><NavLink to='/skills'>Skills</NavLink></li>
              <li><NavLink to='/projects'>Projects</NavLink></li>
              <li><NavLink to='/contact'>Contact</NavLink></li>
        </div>
        <div className="theme-container">
          <div className="theme-mode">
              {(themeMode) ? 
              <DarkModeIcon className="mode-icon" style={{cursor: 'pointer', color: theme.textColor}} onClick={() => {handleChange({label: 'Dark', value: {aColor: '#dde6ed', boxShadowColor: 'rgb(92, 91, 91)', boxShadowColorB: 'rgb(8, 7, 7)', bColor: '#666666', backgroundColor: '#101010', label: 'Dark', textColor:  theme.textColor}})}} />
            : 
            <LightModeIcon className="mode-icon" style={{cursor: 'pointer', color: theme.textColor}} onClick={() => {handleChange({label: 'Light', value: {aColor: '#101010', boxShadowColor: '#F1F1F1', boxShadowColorB: theme.textColor, bColor: '#666666', backgroundColor: '#F1F1F1', label: 'Light', textColor:  theme.textColor}})}} />}
          </div>
          <div className="theme-selection">
              <Select
                  className="select"
                  onChange={handleChange}
                  options={themeOptions}
                  menuPlacement='top'
                  defaultValue={{label: theme.label, value: theme}}
                  styles={
                      {
                          control: styles => ({...styles, cursor: 'pointer', backgroundColor: theme.backgroundColor, color: 'white', border: `1px solid ${theme.textColor}`, '&:hover': {
                              border: `1px solid ${theme.textColor}`
                          } }),
                          menu: styles => ({...styles, backgroundColor: theme.backgroundColor}),
                          option: (styles, {isFocused}) => {
                              return {
                                  ...styles,
                                  backgroundColor: (!isFocused) ? theme.backgroundColor : theme.textColor,
                                  color: (!isFocused) ? theme.textColor : theme.backgroundColor,
                                  cursor: 'pointer'
                              }
                          }
                      }
                  }
              />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navbar
