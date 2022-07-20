import { Button, Modal} from "@chakra-ui/react"
import logo from "../img/orbitz_logo.png";
import styles from "./header.module.css";


export const Header=()=>{
    return(
        <div className="nav1" style={{display: "flex" , justifyContent:"space-between",background:"#00253c",height:"4rem"}}>
        <div className="nav2" style={{display: "flex"}}>
            <div className="logo">
                <img style={{ cursor: "pointer",marginTop: "10px", marginLeft: "20px", flexGrow: 1, marginTop: "15px" }} src={logo} alt="Orbitz"  />
            </div>
            <div className={styles.nav4}>
                 <Button >Travel More</Button>
            </div>
        </div>
        <div className={styles.nav5btn} >
            <Button >Español</Button>
            <Button >List your property</Button>
            <Button >Support</Button>
            <Button >Trips</Button>
            <Button>Sign in</Button>
        </div>

  
    </div>
    )
}


//Navbar is stil some work pending