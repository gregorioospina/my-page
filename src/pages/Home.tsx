import React, { useState } from 'react';
import { Grid, useTheme, Theme, createStyles, makeStyles, Typography, Button, IconButton, useMediaQuery, Box } from "@material-ui/core";
import { KeyboardArrowDown } from '@material-ui/icons';
import emmers from "../fonts/emmerson.png";

interface IHome { }

const PRINCIPAL = "#1cb573";
const TEXT = "#293241";
const SECONDARY = "#f4f2f3";
const ACCENTS = "#F87060";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridroot: {
      height: "100vh",
      padding: "2vw",
      width: "100vw"
    },

    bottomgrid: {
      height: "15%"
    },
    gre: {
      transitionDuration: "0.6s",
      transitionProperty: "width",
      backgroundColor: PRINCIPAL,
    },
    go: {
      transitionDuration: "0.6s",
      transitionProperty: "width",
      backgroundColor: SECONDARY,
    },
    nameTypography: {
      transitionProperty: "font-size",
      transitionDuration: "1s",
      "&.subtitle": {
        fontFamily: "Bahnschrift",
        fontSize: "16px",
        "&.work": {
          fontSize: "20px",
        }
      },
      "&.title": {
        fontFamily: "Segoe",
        fontSize: "10vw",
        paddingRight: 5,
        "&.smallText": {
          fontSize: "2vw"
        }
      },
      "&.gre": {
        color: SECONDARY,
      },
      "&.go": {
        color: PRINCIPAL
      },
      "&.salmon": {
        color: ACCENTS
      },

    },
    transition: {
      transitionProperty: "height, font-size",
      transitionDuration: "1s",
    },
    topText: {
    },
    opacityTransformation: {
      transitionProperty: "opacity",
      transitionDuration: "0.6s",
      "&.active": {
        opacity: 1
      }
    },
    downIcons: {
      transitionProperty: "opacity, fontSize",
      transitionDuration: "0.6s",
      opacity: 0,
      "&.active": {
        opacity: 1
      }
    },
    aboutMeText: {
      fontFamily: "Bahnschrift",
      color: SECONDARY,
      "&.body": {
        fontFamily: "Catamaran"
      }
    },
    accentText: {
      fontFamily: "Bahnschrift",
      color: ACCENTS,
      "&.body": {
        fontFamily: "Catamaran"
      }
    },
    workText: {
      fontFamily: "Bahnschrift",
      color: TEXT,
      "&.body": {
        fontFamily: "Catamaran"
      }
    }
  }))

const Home = (props: IHome) => {
  const [about, setAbout] = useState<boolean>(false);
  const [work, setWork] = useState<boolean>(false);
  const [showEmmers, setShowEmmers] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  React.useEffect(() => {
    if (showEmmers) {
      setTimeout(() => {
        setShowEmmers(false);
      }, 5000)
    }
  }, [showEmmers])

  const handleSwitch = (type: "about" | "work", cbk) => {
    if (type === "work" && fullScreen) {
      setAbout(false);
      setWork(p => !p);
      return;
    } else if (type === "about" && fullScreen) {
      setWork(false);
      setAbout(p => !p);
      return;
    }
    cbk();
  }

  const getWidth = (type: "about" | "work") => {
    if (fullScreen) {
      if (type === "about") {
        return work ? "0%" : about ? "100%" : "50%";
      } else {
        return about ? "0%" : work ? "100%" : "50%";
      }
    } else {
      return "50%"
    }
  }

  const handleShowEmmers = () => {
    setShowEmmers(true);
    setAbout(true);
  }

  const renderAboutMe = () => {
    return (
      <Box style={{ width: "80%", margin: "0 auto" }}>
        <Typography align="left" variant="h6" className={`${about ? "active" : ""} ${classes.opacityTransformation} ${classes.aboutMeText}`}>
          My name is Gregorio Ospina
      </Typography>
        <Typography align="justify" paragraph variant="subtitle1" className={`body ${about ? "active" : ""} ${classes.opacityTransformation} ${classes.aboutMeText}`}>
          I am a Systems and Computing engineer from Los Andes University, in Bogotá, Colombia.
        </Typography>
        <Typography align="justify" paragraph variant="subtitle1" className={`body ${about ? "active" : ""} ${classes.opacityTransformation} ${classes.aboutMeText}`}>
          I have an avid interest in minimal, dynamic user experiences. Where the simplicity of the design, enables the functionality of the application to come forward.
        </Typography>
        <Typography align="justify" paragraph variant="subtitle1" className={`body ${about ? "active" : ""} ${classes.opacityTransformation} ${classes.aboutMeText}`}>
          Furthermore, I am a sloppy but persistent guitar player, F1 fan and quarantine-born baker.
        </Typography>
        {showEmmers &&
          <Grid justify="center" alignItems="center" container>
            <Grid item >
              <img src={emmers} height={200} width={150} alt={"Whatchu up to, skinny jean?"} />
              <Typography className={classes.aboutMeText}>
                Whatchu up to, skinny jean?
            </Typography>
            </Grid>
          </Grid>
        }
      </Box>
    )
  }

  const renderWork = () => {
    return (
      <Box style={{
        width: "80%",
        margin: "0 auto",
        maxHeight: "78vh",
        overflowY: "auto"
      }}>
        <Typography align="left" variant="h6" className={`${about ? "active" : ""} ${classes.opacityTransformation} ${classes.accentText}`}>
          Where I've Worked
        </Typography>
        <Typography align="justify" variant="subtitle1" className={`${about ? "active" : ""} ${classes.opacityTransformation} ${classes.workText}`}>
          Co-Founder, Lead Front-End Developer at Cleverlynk
        </Typography>
        <Typography variant="overline">January 2020 - Present</Typography>
        <Typography paragraph align="justify" variant="body2" className={`body ${about ? "active" : ""} ${classes.opacityTransformation} ${classes.workText}`}>
          Cleverlynk is a startup founded on May, 2020. It is a web-based application that enables
          companies to design aesthetic catalogs of their products with incredible ease from which they
          can showcase their products and sell directly to customers without needing a domain or webpage. As of july
          2020, we are operational and have over 40 companies using the platform, transacting over 80
          thousand dollars through our platform in a monthly basis.
        </Typography>
        <Typography align="justify" variant="subtitle1" className={`${about ? "active" : ""} ${classes.opacityTransformation} ${classes.workText}`}>
          Teacher Assistant at Los Andes University, Bogota, Colombia
        </Typography>
        <Typography variant="overline">August 2019 - July 2020</Typography>
        <Typography paragraph align="justify" variant="body2" className={`body ${about ? "active" : ""} ${classes.opacityTransformation} ${classes.workText}`}>
          Teacher Assistant for the class Computational Infrastructure.
          Topics covered: Concurrency, Operating Systems, Crypto-Security, Large Scale Infrastructure
          and Virtualization. In charge of a small laboratory class.
        </Typography>
        <Typography align="left" variant="subtitle1" className={`${about ? "active" : ""} ${classes.opacityTransformation} ${classes.workText}`}>
          Software Developer at Bizagi
        </Typography>
        <Typography variant="overline">May 2019 — August 2019</Typography>
        <Typography paragraph align="justify" variant="body2" className={`body ${about ? "active" : ""} ${classes.opacityTransformation} ${classes.workText}`}>
          Software developer working in a .NET framework for the area of DevOps. Developed a migration
          tool which helps the client migrate their SQL database from previous to the latest version
          avoiding ladder upgrade.
        </Typography>
        <Typography align="left" variant="h6" className={`${about ? "active" : ""} ${classes.opacityTransformation} ${classes.accentText}`}>
          Honorable Mentions
        </Typography>
        <Typography align="justify" variant="subtitle1" className={`${about ? "active" : ""} ${classes.opacityTransformation} ${classes.workText}`}>
          3rd Place in Zoohackathon 2019.
        </Typography>
        <Typography variant="overline">Hackathon with the aim of curbing the illegal wood traffic in Colombia</Typography>
        <Typography paragraph align="justify" variant="body2" className={`body ${about ? "active" : ""} ${classes.opacityTransformation} ${classes.workText}`}>
          My team proposed using blockchain network in order to track the movement of legal shipments
          with absolute transparency and immutability in order to create consumer awareness to purchase
          the wood derivative products that were certified by our initiative.
        </Typography>
        <Typography align="left" variant="subtitle1" className={`${about ? "active" : ""} ${classes.opacityTransformation} ${classes.workText}`}>
          Software Developer Intern at Accenture
        </Typography>
        <Typography variant="overline">internship did not take place</Typography>
        <Typography paragraph align="justify" variant="body2" className={`body ${about ? "active" : ""} ${classes.opacityTransformation} ${classes.workText}`}>
          Received offer to join Accenture as a Big Data Intern for the second semester of 2020, however I couldnt take the opportunity.
        </Typography>
      </Box>
    )
  }

  const classes = useStyles();

  return (
    <Grid container spacing={0} className={classes.gridroot}>
      <Grid item direction="column" container style={{ width: getWidth("about"), maxHeight: "inherit" }} className={classes.gre}>
        <Grid item container justify="center" alignItems="flex-end" direction="column" style={{ height: about ? "5%" : "85%" }} wrap="nowrap" className={classes.transition}>
          <Grid item >
            <Typography className={`gre title ${classes.nameTypography} ${classes.opacityTransformation}`} style={{ opacity: about ? "0" : "1" }}>
              GRE
        </Typography>
          </Grid>
          <Grid item>
            <Typography className={`gre subtitle ${classes.nameTypography} ${classes.opacityTransformation}`} style={{ opacity: about ? "0" : "1" }}>
              SYST
              <a onClick={handleShowEmmers}>E</a>
              MS AND COMP
        </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item xs={12}>
            <Button variant="text" onClick={() => handleSwitch("about", () => setAbout(p => !p))}>
              <Typography className={`subtitle gre ${classes.nameTypography} ${about ? "work" : ""}`}>
                ABOUT ME
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={12}>
            <IconButton onClick={() => handleSwitch("about", () => setAbout(p => !p))} className={`${about ? "active" : ""} ${classes.opacityTransformation} ${classes.downIcons}`} style={{ display: about ? "" : "none" }}>
              <KeyboardArrowDown style={{ color: SECONDARY }} />
            </IconButton>
          </Grid>
          <Grid item xs={12} style={{ display: about ? "" : "none" }} className={`${about ? "active" : ""} ${classes.opacityTransformation}`}>
            {renderAboutMe()}
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction="column" style={{ width: getWidth("work"), maxHeight: "inherit" }} className={classes.go}>
        <Grid item container justify="center" alignItems="flex-start" direction="column" style={{ height: work ? "5%" : "85%" }} wrap="nowrap" className={classes.transition}>
          <Grid item >
            <Typography className={`go title ${classes.nameTypography} ${classes.opacityTransformation}`} style={{ opacity: work ? "0" : "1" }}>
              GO
        </Typography>
          </Grid>
          <Grid item >
            <Typography className={`go subtitle ${classes.nameTypography} ${classes.opacityTransformation}`} style={{ opacity: work ? "0" : "1" }}>
              UTING ENGINEER
        </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item xs={12}>
            <Button variant="text" onClick={() => handleSwitch("work", () => setWork(p => !p))}>
              <Typography className={`subtitle salmon ${classes.nameTypography} ${work ? "work" : ""}`}>
                WORK & CV
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={12}>
            <IconButton onClick={() => handleSwitch("work", () => setWork(p => !p))} className={`${work ? "active" : ""} ${classes.opacityTransformation} ${classes.downIcons}`} style={{ display: work ? "" : "none" }}>
              <KeyboardArrowDown style={{ color: ACCENTS }} />
            </IconButton>
          </Grid>
          <Grid item xs={12} style={{ display: work ? "" : "none" }} className={`${work ? "active" : ""} ${classes.opacityTransformation}`}>
            {renderWork()}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
export default Home;