import { Box, Button, label, Checkbox, Modal, Text, MenuItem} from "@chakra-ui/react";
import styles from "./Search.module.css";
export const Search=()=>{
    return(
        <>
        <Box className={styles.inpBox}>
            {/* <TextField className={`${styles.inps} ${styles.place}`} variant="outlined" label="going to" /> */}
            <Text name="city"  variant="outlined" className={`${styles.inps} ${styles.place}`} label="City" select>
                    {/* {places.map((option) => (
                        <MenuItem key={Option.value} value={option.value}>{option.label}</MenuItem>
                    ))} */}
                </Text>
            <Text
                name="from"
                        id="datetime-local"
                       
                        label="Check-in"
                        type="date"
                        className={styles.date}
                        variant="outlined"
                       
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
            <Text
                name="to"
                        id="datetime-local"
                       
                        label="Check-out"
                        type="date"
                        className={styles.date}
                        variant="outlined"
                        defaultValue="2021-09-03"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
            <Text name="travelers"  className={styles.text} variant="outlined" label="Travelers" />
         <Box>
                <button>Search</button>
            </Box> : null
            </Box>
           <Box><div className={styles.checkboxes}>
                <Checkbox className={styles.checkboxStyle1} /><div className={styles.flight_div}>Add a Flight </div>
                <Checkbox className={styles.checkboxStyle2} /><p className={styles.car_div}>Add a Car </p>
            </div><Box>
                <button>Search</button>
            </Box></Box> : null
            </>
    )
}