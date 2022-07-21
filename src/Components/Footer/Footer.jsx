import { Box, Container, Grid } from '@material-ui/core'
import React from 'react'
import { useStyles } from './Footermake';
import styles from './Footer.module.css'
import { Link } from 'react-router-dom';

const Box1 = [
    {
        to: "/", Contact: "About"
    },
    {
        to: "/", Contact: "Jobs"
    },
    {
        to: "/", Contact: "List your property"
    },
    {
        to: "/", Contact: "Partnerships"
    },
    {
        to: "/", Contact: "Newsroom"
    },
    {
        to: "/", Contact: "Investor Ritemations"
    },
    {
        to: "/", Contact: "Site Map"
    },
    {
        to: "/", Contact: "Orbitz"
    },
    {
        to: "/", Contact: "Advertising"
    },
]
const Box2 = [
    {
        to: "/", Contact: "Hotitems in Uninted State"
    },
    {
        to: "/", Contact: "Car Rentals in United States"
    },
    {
        to: "/", Contact: "Domestic Fights"
    },
    {
        to: "/", Contact: "Vacations Package in United States"
    },
    {
        to: "/", Contact: "Orbitz Reviews"
    },
    {
        to: "/", Contact: "Orbitz Coupons"
    },
    {
        to: "/", Contact: "LGBTQ Travitems"
    },
    {
        to: "/", Contact: "Unique Accommodations"
    },
    {
        to: "/", Contact: "Travitem Blog"
    },
]
const Box3 = [
    {
        to: "/", Contact: "Privacy Policy"
    },
    {
        to: "/", Contact: "Terms Of Use"
    },
    {
        to: "/", Contact: "Orbitz Rewards Terms"
    },
    {
        to: "/", Contact: "Do not siteml my personal information"
    }

]
const Box4 = [
    {
        to: "/", Contact: "Privacy Policy"
    },
    {
        to: "/", Contact: "Cancal your hotitem or vacation rental booking"
    },
    {
        to: "/", Contact: "cancitem your flight"
    },
    {
        to: "/", Contact: "Refund timeslines,policies & process"
    }
    ,
    {
        to: "/", Contact: "Refund timeslines,policies & process"
    }
    ,
    {
        to: "/", Contact: "Coronavirus Disease (Covid-19)"
    }

]

const bootX = {

    sm: 7
}
const bootY = {
    xs: 1,

}

const Footer = () => {
    const Foot = useStyles()
    return (
        <footer className={styles.BgColor}>
            <box >
                <Box className={styles.containerGrid} px={bootX} py={bootY}>
                    <Container className={Foot.logo}>
                        <img src="https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg" alt="" />
                    </Container>

                    <Container maxWidth="lg">
                        <Grid container spacing={5}>
                            <Grid item xs={6} sm={3}>
                                <Box className={Foot.HeadBox} >Company</Box>
                                {Box1.map((item) => (
                                    <Box className={Foot.Box}>

                                        <Link className={Foot.Link} to={item.to}>{item.Contact}</Link>
                                    </Box>
                                ))}
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Box className={Foot.HeadBox}>Explore</Box>
                                {Box2.map((item) => (
                                    <Box className={Foot.Box}>

                                        <Link className={Foot.Link} to={item.to}>{item.Contact}</Link>
                                    </Box>
                                ))}
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Box className={Foot.HeadBox}>Policy</Box>
                                {Box3.map((item) => (
                                    <Box className={Foot.Box}>

                                        <Link className={Foot.Link} to={item.to}>{item.Contact}</Link>
                                    </Box>
                                ))}
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Box className={Foot.HeadBox}>Help</Box>
                                {Box4.map((item) => (
                                    <Box className={Foot.Box}>

                                        <Link className={Foot.Link} to={item.to}>{item.Contact}</Link>
                                    </Box>
                                ))}
                            </Grid>


                        </Grid>


                    </Container>

                </Box>
                <Container>
                    <Box textAlign="center" borderTop={1}>
                        <Box className={Foot.Box2}>© 2021 Orbitz, LLC, an Expedia Group Company. All rights reserved.</Box>
                        <Box className={Foot.Box3}> Orbitz, Orbitz.com, and the Orbitz logo are trademarks or registered trademarks of Orbitz, LLC. CST# 2083930-50.</Box>
                    </Box>
                </Container>
            </box>
        </footer>
    )
}

export default Footer
