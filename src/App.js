
import { Routes , Route} from 'react-router-dom';
import Login from './Login/Login';
import Products from './Products/Products';
import Protected from './ProtectedRoute/Protected';

function App() {


  return (
    <>
    <Routes>
      <Route path='/' 
        element={<Protected><Products /></Protected>} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<h2>404 Not found</h2>} />
    </Routes>
    </>
  );
}

export default App;
