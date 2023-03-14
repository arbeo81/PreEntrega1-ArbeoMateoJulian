import styles from "./navbar.module.scss";

const Navbar = ({ icono, carrito }) => {
  return (
    <div className={styles.container}>
      <img src={icono} alt="" width="120" height="40" />
      <p className={styles.nav}><a href="#">Home</a></p>
      <p className={styles.nav}><a href="#">Productos</a></p>
      <p className={styles.nav}><a href="#">Ofertas</a></p>
      <p className={styles.nav}><a href="#">Envios</a></p>
      <p>5</p>
      <img src={carrito} alt="" width="40" height="40" />
    </div>
  );
};

export default Navbar;