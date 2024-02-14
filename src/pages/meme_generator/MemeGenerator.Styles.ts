const memeGeneratorStyles = {
  mainContainer: {
    width: "100%",
    height: "100vh",
    padding: "30px 0px",
  },

  childContainer: {
    // border: "3px solid orange",
    width: "90%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    height: "calc(100vh - 60px)",
  },

  memeGeneratorHeading: {
    fontSize: { xs: "28px", sm: "35px" },
    textAlign: "center",
    // border: "2px solid blue",
  },

  childparentContainer: {
    // border: "2px solid pink",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: "1",
  },

  memeContainer: {
    width: { xs: "100%", sm: "80%", md: "95%", lg: "75%", xl: "65%" },
    margin: "auto",
    // border: "1px solid red",
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    height: { xs: "calc(100vh - 170px)", md: "525px" },
    borderRadius: "18px",
  },

  leftContainer: {
    width: { xs: "100%", md: "50%" },
    // border: "1px solid orange",
    position: "relative",
    top: "0",
    left: "0",
  },

  image: {
    width: "100%",
    height: { xs: "320px", md: "525px" },
    borderRadius: "18px",
  },

  boxMemeOne: {
    position: "absolute",
    top: "10px",
    right: "10px",
    // border: "2px solid blue",
    // height: "70px",
    width: "260px",
    wordWrap: "break-word",
    overflow: "auto",
    padding: "0px 10px"
  },

  memeOne: {  
    color: "#eb34a2",
    // border: "2px solid blue",
    fontSize: '16px',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  },

  boxMemeTwo: {
    position: "absolute",
    top: "47%",
    bottom: "10px",
    left: "10px",
    // border: "2px solid blue",
    // height: "70px",
    width: "260px",
    wordWrap: "break-word",
    overflow: "auto",
    padding: "0px 40px",

  },

  memeTwo: {
    fontSize: '16px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    color: "#34b1eb",


  },

  rightContainer: {
    width: { xs: "100%", md: "50%" },
    // border: "1px solid orange",
    padding: { xs: "35px 0px", md: "25px 10px" },
  },

  inputsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "33px",
  },

  inputContainer: {
    height: "59px",
    // border: "2px solid red",
    overflowY: "auto",
    // margin: "20px 0px",
    padding: "10px 0px",
  },

  textField: {
    width: "100%",
  },

  memeBtn: {
    height: "43px",
    textTransform: "capitalize",
    fontSize: "16px",
  },
};

export default memeGeneratorStyles;
