import styles from "./Header.module.css"
// import logo from "../assets/salad.png"

const Header=()=>{
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <img src="https://flowbite.com/docs/images/logo.svg" alt="logo" />
                <h1>GeekFoods</h1>
            </div>

            <div className={styles.navItems}>
                <a href="#" className={styles.home}>Home</a>
                <a href="#">Quote</a>
                <a href="#">Restaurants</a>
                <a href="#">Foods</a>
                <a href="#">Contact</a>
            </div>
            <div >
            <button className={styles.btn}>Get Started</button>
            </div>
            
        </div>
    )
}

export default Header;