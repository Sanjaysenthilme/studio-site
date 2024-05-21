import React from "react";
// import NavBar from "./NavBar";
// import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const theme = createTheme();
const theme2 = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100vh",
  },
  box1: {
    width:"100%",
    height:"100%",
    "@media (max-width:700px)": {
      width: "100%",
      heigh: "100%",
      backgroundColor: "deepskyblue",
    },
    "@media (min-width:700px)": {
      width: "100%",
      heigh: "100%",
      backgroundColor: "yellow",
    },
  },
  box2: {
    width:"100%",
    height:'100%',
    "@media (max-width:700px)": {
      width: "100%",
      heigh: "100%",
      backgroundColor: "deepskyblue",
    },
    "@media (min-width:700px)": {
      width: "100%",
      heigh: "100%",
      backgroundColor: "gray",
    },
  },
  leftImg: {
    display: "flex",
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },
  TypoContent:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  TypoTitle:{
    [theme.breakpoints.down('sm')]: {
        paddingRight:'5%',
      },
  }
}));
const AboutPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container>
        {/* image part  */}
        <ThemeProvider theme={theme2}>
          <Grid item md={5} lg={5}>
            <div className={classes.box1}>
              <img
                src="/Images/Babee.jpg"
                alt="babeeimage"
                className={classes.leftImg}
              />
            </div>
          </Grid>
          {/* content */}
          <Grid item md={7} lg={7}>
            <div className={classes.box2}>
                <Typography variant="h4" component="p" fontWeight='bolder' pt={3} pl={10} className={classes.TypoTitle}>
                    About
                </Typography>
                <Typography variant="h6" component="p" pt={1} pl={10} fontSize='bold' fontStyle='italic'>
                    Who I am and What I do
                </Typography>
              
              <Typography variant="h6" component="p" pt={2} pl={10} pb={4} fontFamily={"sans-serif"} className={classes.TypoContent}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                quam amet ad harum eligendi, placeat nihil eaque voluptate natus
                perspiciatis aut! Asperiores tenetur impedit expedita minima
                voluptatibus sit et ipsa.
              </Typography>
            </div>
          </Grid>
        </ThemeProvider>
      </Grid>
    </div>
  );
};

export default AboutPage;
