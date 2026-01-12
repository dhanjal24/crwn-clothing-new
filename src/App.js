import { Routes, Route } from 'react-router'
import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';
import Navigation from './routes/navigation/navigation.component';
import Signin from './routes/signin/signin.component';


const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/sign-in' element={<Signin />} />
        </Route>
    </Routes>
  );
}

export default App;
