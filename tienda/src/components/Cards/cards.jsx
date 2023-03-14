import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from "./cards.module.scss";

function BasicExample({texto, descripcion, imagen}) {
  return (
    <div className={styles.container}>
    <Card className={styles.cards} style={{ width: '20rem' }}>
      <Card.Img img src={imagen}/>
      <Card.Body>
        <Card.Title>{texto}</Card.Title>
        <Card.Text>
          {descripcion}
        </Card.Text>
        <Button className={styles.btn}>Comprar</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default BasicExample;