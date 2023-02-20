import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { ItemPage } from "./components/characterInfoPage/characterPageInfo";
import { CharacterPage } from "./components/characterPage/characterPage";


function App() {
     return (
          <BrowserRouter>
          <Routes>
                <Route path={'/characters'} element={<CharacterPage/>}/> 
                <Route path={'/character_page/:id'} element={<ItemPage/>}/>
                
            </Routes>
          </BrowserRouter>
     );
}

export default App;
