import React, { useState, useRef, useEffect } from "react";
import Styles from "../CSS_Components/Home.module.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import Box from "@mui/material/Box";
import NavBar from "./NavBar";
import { Button, Grid, Typography } from "@mui/material";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import AboutPage from "./AboutPage";

const theme = createTheme();
const theme2 = responsiveFontSizes(theme);

const HomePage = () => {
  const sliderListRef = useRef(null);
  const thumbnailRef = useRef(null);

  const [sliderClass, setSliderClass] = useState("");
  const [autoSlideInterval, setAutoSlideInterval] = useState(null);

  const startAutoSlide = () => {
    const interval = setInterval(() => {
      moveSlider("next");
    }, 10000);
    setAutoSlideInterval(interval);
  };

  const stopAutoSlide = () => {
    clearInterval(autoSlideInterval);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
    // Disable ESLint warning for missing dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const moveSlider = (direction) => {
    const sliderList = sliderListRef.current;
    const thumbnail = thumbnailRef.current;

    if (!sliderList || !thumbnail) {
      console.error("Slider list or thumbnail not found");
      return;
    }

    const sliderItems = sliderList.querySelectorAll(`.${Styles.item}`);
    const thumbnailItems = thumbnail.querySelectorAll(`.${Styles.item}`);

    if (!sliderItems.length || !thumbnailItems.length) {
      console.error("Slider items or thumbnail items not found");
      return;
    }

    if (direction === "next") {
      const firstSliderItem = sliderItems[0];
      const firstThumbnailItem = thumbnailItems[0];

      if (!firstSliderItem || !firstThumbnailItem) {
        console.error("Next slider item or thumbnail item not found");
        return;
      }

      sliderList.appendChild(firstSliderItem);
      thumbnail.appendChild(firstThumbnailItem);
      setSliderClass("next");
    } else {
      const lastIndex = sliderItems.length - 1;
      const lastSliderItem = sliderItems[lastIndex];
      const lastThumbnailItem = thumbnailItems[lastIndex];

      if (!lastSliderItem || !lastThumbnailItem) {
        console.error("Previous slider item or thumbnail item not found");
        return;
      }

      sliderList.prepend(lastSliderItem);
      thumbnail.prepend(lastThumbnailItem);
      setSliderClass("prev");
    }

    sliderList.addEventListener(
      "animationend",
      () => {
        setSliderClass("");
      },
      { once: true }
    );
  };

  return (
    <Box>
      {/* NavBar Section */}
      <Box>
        <NavBar />
      </Box>

      {/* Home Section */}

      <Box>
        <ThemeProvider theme={theme2}>
          <div className={`${Styles.slider} ${sliderClass}`}>
            <div className={Styles.list} ref={sliderListRef}>
              {/* Render your slider items here */}
                <div className={Styles.item}>
                    <img src="/Images/Babee.jpg" alt="BabeImg-1" />
                    <div className={Styles.content}>
                    <div className={Styles.title}>
                        <Typography variant="h2" fontWeight="bold">
                        Magic Slider
                        </Typography>
                    </div>
                    <div className={Styles.type}>
                        <Typography variant="h1" component="h6" fontWeight="bold">
                        Babe photo
                        </Typography>
                    </div>
                    <div className={Styles.description}>
                        <Typography variant="h6" component="p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nemo cupiditate necessitatibus labore quibusdam veritatis
                        enim, rem neque laboriosam accusantium corporis tenetur
                        corrupti dolorem ipsum explicabo aut, praesentium quis
                        perspiciatis vel?
                        </Typography>
                    </div>
                    <div className={Styles.btn}>
                        <Button>See More</Button>
                    </div>
                    </div>
                </div>
                <div className={Styles.item}>
                    <img src="/Images/Wedding.jpg" alt="WeddingImg-1" />
                    <div className={Styles.content}>
                    <div className={Styles.title}>
                        <Typography variant="h2" fontWeight="bold">
                        Magic Slider
                        </Typography>
                    </div>
                    <div className={Styles.type}>
                        <Typography variant="h1" component="h6" fontWeight="bold">
                        Wedding Photography
                        </Typography>
                    </div>
                    <div className={Styles.description}>
                        <Typography variant="h6" component="p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nemo cupiditate necessitatibus labore quibusdam veritatis
                        enim, rem neque laboriosam accusantium corporis tenetur
                        corrupti dolorem ipsum explicabo aut, praesentium quis
                        perspiciatis vel?
                        </Typography>
                    </div>
                    <div className={Styles.btn}>
                        <Button>See More</Button>
                    </div>
                    </div>
                </div>
                <div className={Styles.item}>
                    <img src="/Images/PreWedding.jpeg" alt="PreWeddingImg-3" />
                    <div className={Styles.content}>
                    <div className={Styles.title}>
                        <Typography variant="h2" fontWeight="bold">
                        Magic Slider
                        </Typography>
                    </div>
                    <div className={Styles.type}>
                        <Typography variant="h1" component="h6" fontWeight="bold">
                        
                        Pre-Wedding Photography
                        </Typography>
                    </div>
                    <div className={Styles.description}>
                        <Typography variant="h6" component="p">
                        cupiditate necessitatibus labore quibusdam veritatis enim,
                        rem neque laboriosam accusantium corporis tenetur corrupti
                        dolorem ipsum explicabo aut, praesentium quis perspiciatis
                        vel? Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Nemo
                        </Typography>
                    </div>
                    <div className={Styles.btn}>
                        <Button>See More</Button>
                    </div>
                    </div>
                </div>
                <div className={Styles.item}>
                    <img src="/Images/Maternity.jpg" alt="MaternityImg-1" />
                    <div className={Styles.content}>
                    <div className={Styles.title}>
                        <Typography variant="h2" fontWeight="bold">
                        Magic Slider
                        </Typography>
                    </div>
                    <div className={Styles.type}>
                        <Typography variant="h1" component="h6" fontWeight="bold">
                        Maternity Photography
                        </Typography>
                    </div>
                    <div className={Styles.description}>
                        <Typography variant="h6" component="p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nemo cupiditate necessitatibus labore quibusdam veritatis
                        enim, rem neque laboriosam accusantium corporis tenetur
                        corrupti dolorem ipsum explicabo aut, praesentium quis
                        perspiciatis vel?
                        </Typography>
                    </div>
                    <div className={Styles.btn}>
                        <Button>See More</Button>
                    </div>
                    </div>
                </div>
            </div>

            <div className={Styles.thumbnails} ref={thumbnailRef}>
              {/* Render your thumbnail items here */}
              <div className={Styles.item}>
                <img src="/Images/Babee.jpg" alt="BabeImg-1" />
              </div>
              <div className={Styles.item}>
                <img src="/Images/Wedding.jpg" alt="WeddingImg-2" />
              </div>
              <div className={Styles.item}>
                <img src="/Images/PreWedding.jpeg" alt="PreWeddingImg-3" />
              </div>
              <div className={Styles.item}>
                <img src="/Images/Maternity.jpg" alt="Maternity-4" />
              </div>
            </div>

            <div className={Styles.nextPreArrows}>
              <button className={Styles.pre} onClick={() => moveSlider("prev")}>
                <NavigateBeforeIcon alt="Previous" />
              </button>
              <button
                className={Styles.next}
                onClick={() => moveSlider("next")}
              >
                <NavigateNextIcon alt="Next" />
              </button>
            </div>
          </div>
        </ThemeProvider>
      </Box>
      <Box>
        <AboutPage/>
      </Box>
    </Box>
  );
};

export default HomePage;
