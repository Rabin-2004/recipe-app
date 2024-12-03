import Header from './components/Header'
import { CssBaseline } from '@mui/material'
import Body from './components/Body'
import { SearchProvider } from "./context/SearchContext";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Fetch from './components/Fetch';
import Recipe from './components/Recipe';


const App = () => {

  return (
    <BrowserRouter>
      <CssBaseline />

      <SearchProvider>

        
        <Routes>

          <Route path="/" element={
            <>
              <Header />
              <Body />
            </>
          } />
          <Route path= "/fetch" element= {<Fetch />}/>
          <Route path='/recipe-detail' element= {<Recipe />}/>
          </Routes>
       

      </SearchProvider>
    </BrowserRouter>
  )
}

export default App