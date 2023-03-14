import Card from 'react-bootstrap/Card';
import styles from "./slide.module.scss";

function ImgOverlayExample(props) {
  return (
    <Card className="bg-dark text-white" className={styles.portada}>
      <Card.Img className={styles.img} img src="https://www.leti.com/vivetupiel/wp-content/uploads/2018/10/Leti_piel-bebe_3-1.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className={styles.texto}>{props.texto}</Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImgOverlayExample;