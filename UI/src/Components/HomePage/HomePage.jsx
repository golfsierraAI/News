import Header from "../header/Header";
import { makeStyles } from "@material-ui/core/styles";
import NewsCont from "./NewsCont";
const useStyles = makeStyles({
  // container: {
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   height: "90vh",
  // },
});
var HomePage = () => {
  var classes = useStyles();
  return (
    <div>
      <Header />
      <div className={classes.container}>
        <NewsCont />
      </div>
    </div>
  );
};
export default HomePage;
