import { ThemeProvider} from 'styled-components'
import GlobalStyles from "./styles/GlobalStyles";

import Layout from "./components/Layout/index"
import dark from './styles/themes/dark';

const App = () => {
    return (
        <ThemeProvider theme={dark}>
            <GlobalStyles/>
            <Layout/>
        </ThemeProvider> 
    )
  }
  
  export default App
  