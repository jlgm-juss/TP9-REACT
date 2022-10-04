import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import FormularioCita from './components/FormularioCita';
import './style.css'


function App() {
  return (
    <Container>
      <h1 className='text-center mt-5 txtH1'>Administrador pacientes de veterinaria</h1>
      <hr />
      <FormularioCita></FormularioCita>
    </Container>
  );
}

export default App;
