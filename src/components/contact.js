import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
const Contact = () => {
  return (
    <div>
      <h1 className="letras">Mis pasatiempos</h1>
      <br></br>

      <CardGroup style={{ width: "84rem" }}>
        <Card>
          <Card.Img variant="top" src="./img/futbol.jpg" />
          <Card.Body>
            <Card.Title>Jugar Futbool</Card.Title>
            <Card.Text>
              TMe gusta mucho jugar futbool cuando tengo tiempo
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="./img/diseño.jpg" />
          <Card.Body>
            <Card.Title>Diseñar</Card.Title>
            <Card.Text>En mis ratos libres me gusta mucho diseñar</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="./img/gamer.jpeg" />
          <Card.Body>
            <Card.Title>Jugar Videojuegos</Card.Title>
            <Card.Text>
              Me gusta Jugar videojuegos como el Call Of Duty, Fifa etc..
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>

      <Card style={{ width: "28rem" }}>
        <Card.Img variant="top" src="./img/guitarra.jpg" />
        <Card.Body>
          <Card.Title>Tocar Guitarra</Card.Title>
          <Card.Text>Me gusta tocar la guitarra</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Contact;
