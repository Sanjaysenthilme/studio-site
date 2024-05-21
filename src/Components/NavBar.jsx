import React from "react";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useTheme, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import ShutterSpeedIcon from "@mui/icons-material/ShutterSpeed";
import DrawerTool from "../Components/DrawerTool";
import { Link ,useLocation} from "react-router-dom";
// import { makeStyles } from "@mui/styles";  

const useStyles =({
  tab: {
    fontSize: "16px",
    fontWeight: "bolder",
    fontFamily: "sans-serif",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: " #ff5d9e;",
    },
    color: "white",
  },
  spanTypo:{
    fontSize:'18px',
    color:"red"
  }
});

const NavBar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  const location = useLocation();
  const currentPath = location.pathname;


  const tabItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Contact', to: '/contact' },
  ];

  const currentTabIndex = tabItems.findIndex((item) => item.to === currentPath);

  return (
    <Box sx={{backgroundColor:"deeppink"}}>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{backgroundColor:"rgba(250,250,250, 0)",height:20}}
      >
        <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
          {isMatch ? (
            <>
              <Typography sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:2}}>
                <ShutterSpeedIcon /> <span className={{...useStyles.spanTypo}}>snapzpert</span>
              </Typography>
              <DrawerTool />
            </>
          ) : (
            <>
            <Box>
                <Typography sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:2}}>
                    <ShutterSpeedIcon /><span>snapzpert</span>
                </Typography>
            </Box>
              
              {/* <Box sx={{ flexGrow: 1 }} /> */}
              <Box>
                <Grid item sm={6}>
                  <Tabs
                    indicatorColor="false"
                    textColor="inherit"
                    value={currentTabIndex !== -1 ? currentTabIndex : false}
                    sx={{ color: "white", marginLeft: "auto"  }}
                  >
                    {tabItems.map((tab, index) => (
                      <Tab
                        key={index}
                        sx={{...useStyles.tab}}
                        label={tab.label}
                        component={Link}
                        to={tab.to}
                      />
                    ))}
                  </Tabs>
                </Grid>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
