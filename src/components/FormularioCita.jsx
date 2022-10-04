import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import ListaCitas from "./ListaCitas";

const FormularioCita = () => {
  const citasLocalStorage =
    JSON.parse(localStorage.getItem("arregloCitasKey")) || [];

  const [mascota, setMascota] = useState("");
  const [duenio, setDuenio] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [arregloCitas, setArregloCitas] = useState(citasLocalStorage);

  useEffect(() => {
    localStorage.setItem("arregloCitasKey", JSON.stringify(arregloCitas));
  }, [arregloCitas]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      mascota.trim() === "" ||
      duenio.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      alert("Completar todos los datos");
      return;
    } else {
      let objetoCita = { mascota, duenio, fecha, hora, sintomas };
      setArregloCitas([...arregloCitas, objetoCita]);
      setMascota("");
      setDuenio("");
      setFecha("");
      setHora("");
      setSintomas("");
    }
  };

  const borrarCita = (cita) => {
    let arregloModif = arregloCitas.filter((item) => item !== cita);
    setArregloCitas(arregloModif);
  };

  return (
    <div>
      <Form className="border border-dark rounded p-3" onSubmit={handleSubmit}>
        <h5>Llenar el formulario para crear una cita</h5>
        <hr className="border border-dark" />
        <Form.Group className="mb-3" controlId="formBasicMascota">
          <div className="row align-items-center">
            <aside className="col-sm-12 col-md-3 col-lg-2">
              <Form.Label>Nombre de la mascota</Form.Label>
            </aside>
            <aside className="col-sm-12 col-md-9 col-lg-10">
              <Form.Control
                type="text"
                placeholder="Nombre de la mascota"
                onChange={(e) => setMascota(e.target.value)}
                value={mascota}
                required
              />
            </aside>
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDueño">
          <div className="row align-items-center">
            <aside className="col-sm-12 col-md-3 col-lg-2">
              <Form.Label>Nombre del dueño</Form.Label>
            </aside>
            <aside className="col-sm-12 col-md-9 col-lg-10">
              <Form.Control
                type="text"
                placeholder="Nombre del dueño"
                onChange={(e) => setDuenio(e.target.value)}
                value={duenio}
                required
              />
            </aside>
          </div>
        </Form.Group>
        <div className="row">
          <aside className="col-sm-12 col-md-12 col-lg-6">
            <Form.Group className="mb-3" controlId="formBasicFecha">
              <div className="row align-items-center">
                <aside className="col-sm-12 col-md-3 col-lg-4">
                  <Form.Label>Fecha</Form.Label>
                </aside>
                <aside className="col-sm-12 col-md-9 col-lg-6">
                  <Form.Control
                    type="date"
                    onChange={(e) => setFecha(e.target.value)}
                    value={fecha}
                    required
                  />
                </aside>
              </div>
            </Form.Group>
          </aside>
          <aside className="col-sm-12 col-md-12 col-lg-6">
            <Form.Group className="mb-3" controlId="formBasicHora">
              <div className="row align-items-center">
                <aside className="col-sm-12 col-md-3 col-lg-1">
                  <Form.Label>Hora</Form.Label>
                </aside>
                <aside className="col-sm-12 col-md-9 col-lg-6">
                  <Form.Control
                    type="time"
                    onChange={(e) => setHora(e.target.value)}
                    value={hora}
                    required
                  />
                </aside>
              </div>
            </Form.Group>
          </aside>
        </div>
        <Form.Group className="mb-3" controlId="formBasicSintomas">
          <div className="row align-items-center">
            <aside className="col-sm-12 col-md-3 col-lg-2">
              <Form.Label>Sintomas</Form.Label>
            </aside>
            <aside className="col-sm-12 col-md-9 col-lg-10">
              <Form.Control
                type="text"
                placeholder="Describa los sintomas"
                onChange={(e) => setSintomas(e.target.value)}
                value={sintomas}
                required
              />
            </aside>
          </div>
        </Form.Group>
        <hr className="border border-dark" />
        <div className="d-flex justify-content-center">
          <Button variant="secondary" type="submit">
            Agregar nueva cita
          </Button>
        </div>
      </Form>
      <ListaCitas
        arregloCitas={arregloCitas}
        borrarCita={borrarCita}
      ></ListaCitas>
    </div>
  );
};

export default FormularioCita;