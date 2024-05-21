import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import HomeIcon from "@mui/icons-material/Home";
import Person4Icon from "@mui/icons-material/Person4";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import ControlCameraIcon from "@mui/icons-material/ControlCamera";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Grid from "@mui/material/Grid";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import {Link , useLocation} from "react-router-dom";
const DrawerTool = () => {

  const location = useLocation();
  const currentPath = location.pathname;
  // console.log(currentPath.length);

  const [open, setOpen] = useState(false);
 

  const tabItems = [
    { label: 'Home', to: '/' , icon:<HomeIcon />},
    { label: 'About', to: '/about' , icon:<Person4Icon /> },
    { label: 'Services', to: '/services' , icon:<ControlCameraIcon />},
    { label: 'Contact', to: '/contact' , icon:<ContactMailIcon />},
  ]

  // const currentTabIndex = tabItems.findIndex((item)=> item.to===currentPath);
  const currentTabIndex = tabItems.findIndex((item) => currentPath.startsWith(item.to));


  return (
    <>
      <Drawer
        PaperProps={{ sx: { backgroundColor:"white" } }}
        anchor="bottom"
        open={open}
        onClose={() => setOpen(false)}
        sx={{flexGrow:1}}
      >
        <List>
          <ListItemButton>
            <ListItemIcon>
              <Box>
              <Grid item xs={12} sx={{ color: "#dfebed", display: 'flex', justifyContent: 'center', alignItems: 'center' ,marginLeft:'auto'}}>
                <Tabs
                  indicatorColor='#dfebed'
                  textColor="inherit"
                  value={currentTabIndex !== -1 ? currentTabIndex : false}
                  sx={{ color: 'white', margin: 'auto' }}
                >
                  {tabItems.map((tab,index)=>(
                    <Tab 
                      key={index}
                      label={tab.label}
                      component={Link}
                      to={tab.to}
                      icon={tab.icon}
                      sx={{
                        color:"#497285",
                        display:'flex',
                        justifyContent:"center",
                        alignItems:'center',
                        '&:hover':{
                          textColor:"#2b4450"
                        }
                      }}
                    />
                  ))}
                </Tabs>
              </Grid>
              </Box>
              
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>

      <IconButton onClick={() => setOpen(!open)} sx={{ marginLeft: "auto" }}>
        <MenuRoundedIcon sx={{ color: "white" }} />
      </IconButton>
    </>
  );
};

export default DrawerTool;
