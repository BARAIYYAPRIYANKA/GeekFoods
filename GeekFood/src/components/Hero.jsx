
import styles from "./Hero.module.css";

const Hero=()=>{
    return (
        <div className={styles.heroContainer}>
            <img src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="restaurant" />
            <div className={styles.heroContent}>
                <h1>Let us find your <br /><span>Forever Food.</span> </h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Nesciunt illo tenetur fuga ducimus numquam ea!</p>
                <div className={styles.heroButtons}>
                    <button>Search Now</button>
                    <button>Know More</button>
                </div>
            </div>
        </div>
    )
}

export default Hero;