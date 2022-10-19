import Table from "react-bootstrap/Table";
const About = () => {
  return (
    <div>
      <h2 className="form">Formacion Academica</h2>
      <br></br>
      <h4 className="form">Nivel Superior</h4>
      <br></br>
      <img src="./img/tec.jpg" class="img-thumbnail" alt="float-right "></img>
      <Table responsive striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Grado de estudio</th>
            <th>Nombre de la escuela</th>
            <th>carrera</th>
            <th>Grado actual</th>
            <th>Grupo</th>
            <th>especialidas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lic. en curso</td>
            <td>Tecnm Comitan</td>
            <td>Ingenieria en sistemas computacionales</td>
            <td>7 semestre</td>
            <td>Grupo "B"</td>
            <td>Desarrollos de entorno web</td>
          </tr>
        </tbody>
        <br></br>
      </Table>
      <h4 className="form">Nivel Media Superior</h4>
      <Table responsive striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Nombre de la escuela</th>
            <th>Año cursado</th>
            <th>Especialidad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cobach 146 el pacayal</td>
            <td>3</td>
            <td>Informatica</td>
          </tr>
        </tbody>
        <br></br>

        <br></br>
      </Table>
      <h4 className="form">Nivel Basico</h4>
      <Table responsive striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Nombre de la escuela</th>
            <th>Ultimo grado de estudio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>044 Joaquin Baranda</td>
            <td>3</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default About;
