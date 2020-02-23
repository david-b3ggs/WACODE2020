import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MainMap from "./MainMap";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Chart from "./Chart";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
  Text,
  PieChart,
  Pie,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  ScantterChart,
  CartesianGrid,
  ZAxis,
  Tooltip,
  Scatter,
  ScatterChart
} from "recharts";
function createData(xname, company, emission) {
  return { xaxis: xname, c: company, e: emission };
}

const data = [
  createData("00:00", 100, 100),
  createData("03:00", 300, 400),
  createData("06:00", 600, 500),
  createData("09:00", 800, 300),
  createData("12:00", 1500, 4500),
  createData("15:00", 2000, 4000),
  createData("18:00", 2400, 700),
  createData("21:00", 2400, 0)
];

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: 0,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  }
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const data01 = [
    {
      name: "Group A",
      value: Math.random()
    },
    {
      name: "Group B",
      value: Math.random()
    },
    {
      name: "Group C",
      value: Math.random()
    },
    {
      name: "Group D",
      value: Math.random()
    },
    {
      name: "Group E",
      value: Math.random()
    },
    {
      name: "Group F",
      value: Math.random()
    }
  ];
  const data02 = [
    {
      name: "Group A",
      value: Math.random()
    },
    {
      name: "Group B",
      value: Math.random()
    },
    {
      name: "Group C",
      value: Math.random()
    },
    {
      name: "Group D",
      value: Math.random()
    },
    {
      name: "Group E",
      value: Math.random()
    },
    {
      name: "Group F",
      value: Math.random()
    }
  ];

  const radarData = [
    {
      subject: "Co2",
      A: 120,
      B: 110,
      fullMark: 150
    },
    {
      subject: "O3",
      A: 98,
      B: 130,
      fullMark: 150
    },
    {
      subject: "O2",
      A: 86,
      B: 130,
      fullMark: 150
    },
    {
      subject: "NO2",
      A: 99,
      B: 100,
      fullMark: 150
    },
    {
      subject: "Pb",
      A: 85,
      B: 90,
      fullMark: 150
    },
    {
      subject: "Sn",
      A: 65,
      B: 85,
      fullMark: 150
    }
  ];

  const data011 = [
    {
      x: 100,
      y: 200,
      z: 200
    },
    {
      x: 120,
      y: 100,
      z: 260
    },
    {
      x: 170,
      y: 300,
      z: 400
    },
    {
      x: 140,
      y: 250,
      z: 280
    },
    {
      x: 150,
      y: 400,
      z: 500
    },
    {
      x: 110,
      y: 280,
      z: 200
    }
  ];
  const data021 = [
    {
      x: 200,
      y: 260,
      z: 240
    },
    {
      x: 240,
      y: 290,
      z: 220
    },
    {
      x: 190,
      y: 290,
      z: 250
    },
    {
      x: 198,
      y: 250,
      z: 210
    },
    {
      x: 180,
      y: 280,
      z: 260
    },
    {
      x: 210,
      y: 220,
      z: 230
    }
  ];

  return (
    <div className={classes.root}>
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
        style={{ backgroundColor: "#154734", height: "10vh" }}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            ECOLOGI/NOMICAL
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistant"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        {/* <List>{mainListItems}</List> */}
        <Divider />
        {/* <List>{secondaryListItems}</List> */}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container className={classes.container}>
          <Grid
            container
            // direction="column"
            // justify="center"
            // alignItems="center"
            spacing={5}
          >
            <Grid item style={{ width: "100%" }}>
              <MainMap />
            </Grid>
            <Grid item lg>
              <Paper>
                <ScatterChart
                  width={730}
                  height={250}
                  margin={{ top: 20, right: 20, bottom: 10, left: 10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="x" name="stature" unit="cm" />
                  <YAxis dataKey="y" name="weight" unit="kg" />
                  <ZAxis dataKey="z" range={[64, 144]} name="score" unit="km" />
                  <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                  <Legend />
                  <Scatter name="A school" data={data011} fill="#8884d8" />
                  <Scatter name="B school" data={data021} fill="#82ca9d" />
                </ScatterChart>
              </Paper>
            </Grid>

            <Grid item m>
              <Paper>
                <RadarChart
                  outerRadius={90}
                  width={730}
                  height={250}
                  data={radarData}
                >
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={30} domain={[0, 150]} />
                  <Radar
                    name="Exxon"
                    dataKey="A"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.6}
                    title="O3 V.S. Stock Price"
                  />
                  <Radar
                    name="US Solar"
                    dataKey="B"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                    fillOpacity={0.6}
                  />
                  <Legend />
                </RadarChart>
              </Paper>
            </Grid>
            {/* Chart */}
            {/* <Grid item xl>
              <Paper className={fixedHeightPaper}>
                <Chart
                  genData={createData}
                  data={data}
                  title="O3 V.S. Stock Price"
                />
              </Paper>
            </Grid> */}
            <Grid item m>
              <Paper className={fixedHeightPaper}>
                <Chart
                  genData={createData}
                  data={data}
                  title="O3 vs Total Employee Count"
                />
              </Paper>
            </Grid>
            <Grid item >
              <Paper className={fixedHeightPaper} style={{width: "30vw"}}>
                <Chart
                  genData={createData}
                  data={data}
                  title="Co2 V.S. Market Share"
                />
              </Paper>
            </Grid>
            <Grid item m>
              <Paper className={fixedHeightPaper}>
                <Chart
                  genData={createData}
                  data={data}
                  title="Market Share V.S. Total Manufacturing Co2"
                />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}
