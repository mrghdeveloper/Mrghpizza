import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector} from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const quantity = cart.quantity;


  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>012 345 678</div>
        </div>
      </div>
          
      <div className={styles.item}>
        <div className={styles.smscreenLogo}>
            <Link href="/" passHref >
              <Image src="/img/logo.png" alt="" width="160px" height="69px" />
            </Link>
        </div>

        <ul className={styles.list}>
          <Link href="/" passHref>
            <li className={styles.listItem}>Homepage</li>
          </Link>

          <Link href="/#pizzaMenu" passHref >
            <li className={styles.listItem}>Menu</li>
          </Link>
          

          <Link href="/" passHref>
             <Image src="/img/logo.png" alt="" width="160px" height="69px" />
          </Link>

          <Link href="/#contact" passHref>
            <li className={styles.listItem}>Contact</li>
          </Link>

          <Link href="/admin" passHref>
            <li className={styles.listItem}>Login</li>
          </Link>

        </ul>
      </div>
     
        <div className={styles.item}>
          <Link href="/cart" passHref>
            <div className={styles.cart}>
              <Image src="/img/cart.png" alt="" width="30px" height="30px" />
              <div className={styles.counter}>{quantity}</div>
            </div>
          </Link>
        </div>
      
    </div>
  );
};

export default Navbar;
