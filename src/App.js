import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/Menu';

function App() {
  return (
    <>
      <div className='App'>
        <Navbar dark color='primary'>
          <div className='container'>
            <NavbarBrand href='/'>Restaurent CON FUSION </NavbarBrand>
          </div>
        </Navbar>
        <Menu />
      </div>
    </>
  );
}

export default App;
