import { makeStyles } from "@material-ui/styles";
// import auth from "../../../../../public/images/auth";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#FFF",
    height: "100%"
  },
  grid: {
    height: "100%"
  },
  // quoteContainer: {
  //   display: "none"
  // },
  quote: {
    backgroundColor: "#EEE",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: "window.location.origin + /public/images/auth.jpg",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  quoteInner: {
    textAlign: "center",
    flexBasis: "600px"
  },
  quoteText: {
    color: "#FFF",
    fontWeight: 300
  },
  name: {
    marginTop: "3px",
    color: "#FFF"
  },
  bio: {
    color: "#FFF"
  },
  contentContainer: {},
  content: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  contentHeader: {
    display: "flex",
    alignItems: "center",
    paddingTop: "5px",
    paddingBototm: "2px",
    paddingLeft: "2px",
    paddingRight: "2px"
  },
  logoImage: {
    marginLeft: "4px"
  },
  contentBody: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  form: {
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 125,
    flexBasis: 700
  },
  title: {
    marginTop: "3px"
  },
  socialButtons: {
    marginTop: "3px"
  },
  socialIcon: {
    marginRight: "1px"
  },
  sugestion: {
    marginTop: "2px"
  },
  textField: {
    marginTop: "2px"
  },
  signInButton: {
    margin: "2,0"
  }
}));

// const dashboardStyle = {
//   successText: {
//     color: successColor[0]
//   },
//   upArrowCardCategory: {
//     width: "16px",
//     height: "16px"
//   },
//   stats: {
//     color: grayColor[0],
//     display: "inline-flex",
//     fontSize: "12px",
//     lineHeight: "22px",
//     "& svg": {
//       top: "4px",
//       width: "16px",
//       height: "16px",
//       position: "relative",
//       marginRight: "3px",
//       marginLeft: "3px"
//     },
//     "& .fab,& .fas,& .far,& .fal,& .material-icons": {
//       top: "4px",
//       fontSize: "16px",
//       position: "relative",
//       marginRight: "3px",
//       marginLeft: "3px"
//     }
//   },
//   cardCategory: {
//     color: grayColor[0],
//     margin: "0",
//     fontSize: "14px",
//     marginTop: "0",
//     paddingTop: "10px",
//     marginBottom: "0"
//   },
//   cardCategoryWhite: {
//     color: "rgba(" + hexToRgb(whiteColor) + ",.62)",
//     margin: "0",
//     fontSize: "14px",
//     marginTop: "0",
//     marginBottom: "0"
//   },
//   cardTitle: {
//     color: grayColor[2],
//     marginTop: "0px",
//     minHeight: "auto",
//     fontWeight: "300",
//     fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
//     marginBottom: "3px",
//     textDecoration: "none",
//     "& small": {
//       color: grayColor[1],
//       fontWeight: "400",
//       lineHeight: "1"
//     }
//   },
//   cardTitleWhite: {
//     color: whiteColor,
//     marginTop: "0px",
//     minHeight: "auto",
//     fontWeight: "300",
//     fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
//     marginBottom: "3px",
//     textDecoration: "none",
//     "& small": {
//       color: grayColor[1],
//       fontWeight: "400",
//       lineHeight: "1"
//     }
//   }
// };

// const loginStyle = {
//   root: {
//     backgroundColor: theme.palette.background.default,
//     height: "100%"
//   },
//   grid: {
//     height: "100%"
//   },
//   quoteContainer: {
//     [theme.breakpoints.down("md")]: {
//       display: "none"
//     }
//   },
//   quote: {
//     backgroundColor: theme.palette.neutral,
//     height: "100%",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundImage: "url(/images/auth.jpg)",
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "center"
//   },
//   quoteInner: {
//     textAlign: "center",
//     flexBasis: "600px"
//   },
//   quoteText: {
//     color: theme.palette.white,
//     fontWeight: 300
//   },
//   name: {
//     marginTop: theme.spacing(3),
//     color: theme.palette.white
//   },
//   bio: {
//     color: theme.palette.white
//   },
//   contentContainer: {},
//   content: {
//     height: "100%",
//     display: "flex",
//     flexDirection: "column"
//   },
//   contentHeader: {
//     display: "flex",
//     alignItems: "center",
//     paddingTop: theme.spacing(5),
//     paddingBototm: theme.spacing(2),
//     paddingLeft: theme.spacing(2),
//     paddingRight: theme.spacing(2)
//   },
//   logoImage: {
//     marginLeft: theme.spacing(4)
//   },
//   contentBody: {
//     flexGrow: 1,
//     display: "flex",
//     alignItems: "center",
//     [theme.breakpoints.down("md")]: {
//       justifyContent: "center"
//     }
//   },
//   form: {
//     paddingLeft: 100,
//     paddingRight: 100,
//     paddingBottom: 125,
//     flexBasis: 700,
//     [theme.breakpoints.down("sm")]: {
//       paddingLeft: theme.spacing(2),
//       paddingRight: theme.spacing(2)
//     }
//   },
//   title: {
//     marginTop: theme.spacing(3)
//   },
//   socialButtons: {
//     marginTop: theme.spacing(3)
//   },
//   socialIcon: {
//     marginRight: theme.spacing(1)
//   },
//   sugestion: {
//     marginTop: theme.spacing(2)
//   },
//   textField: {
//     marginTop: theme.spacing(2)
//   },
//   signInButton: {
//     margin: theme.spacing(2, 0)
//   }
// };

export default useStyles;
