import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Accueil';
import Game from '../Pages/Game';

const Router = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} ></Route>
                <Route path='/game' element={<Game/>} ></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;