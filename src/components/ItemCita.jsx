import { Card, Button, ListGroup, Badge } from "react-bootstrap";
const ItemCita = ({mascota, duenio, fecha, hora, sintomas, borrarCita, cita}) => {
  return (
    <div className="col-sm-12 col-md-4 col-lg-3 my-4">
      <Card className="bgCard">
        <Card.Body>
          <Card.Title>Mascota: {mascota}</Card.Title>
          <Card.Subtitle>Dueño: {duenio}</Card.Subtitle>
          <hr />
          <ListGroup>
            <ListGroup.Item>Fecha: <Badge bg="secondary" className="fs-6 ms-4">{fecha}</Badge> </ListGroup.Item>
            <ListGroup.Item>Hora: <Badge bg="secondary" className="fs-6 ms-5">{hora}</Badge></ListGroup.Item>
            <ListGroup.Item>Sintomas: {sintomas}</ListGroup.Item>
          </ListGroup>
          <hr />
          <div className="d-flex justify-content-end">
            <Button variant="danger" onClick={()=> borrarCita(cita)}>Borrar</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemCita;