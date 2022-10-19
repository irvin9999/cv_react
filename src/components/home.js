import Table from "react-bootstrap/Table";
import Accordion from "react-bootstrap/Accordion";

const Home = () => {
  return (
    <div>
      <h1>Datos Personales</h1>
      <br></br>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Sobre mi</Accordion.Header>
          <Accordion.Body>
            Actualmente estudio la carrera en sistemas computacionales en el
            TecnmComitan, Vivo en una colonia que se llama potrerillo, Por ahora
            estoy realizando lo que es mi serviocio social, soy una persona que
            se caracteriza por ser muy sencilla, me gusta mucho divertirme.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <br></br>
      <p>
        <img src="./img/1.jpg" class="img-thumbnail" alt="..."></img>
      </p>
      <br></br>
      <Table className="Table" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Nombre</th>
            <td>Ervin</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Apellido Paterno</th>
            <td>Silvestre</td>
          </tr>
          <tr>
            <th>Apellido Materno</th>
            <td>Cardona</td>
          </tr>
          <tr>
            <th>Numero de telefono</th>
            <td>9631851766</td>
          </tr>
          <tr>
            <th>Correo electronico</th>
            <td>ervinnvs65@gmail.com</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default Home;
