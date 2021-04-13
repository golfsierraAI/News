import Header from "../header/Header";
import { makeStyles } from "@material-ui/core/styles";
import NewsCont from "./NewsCont";
const useStyles = makeStyles({
  container: {
    height: "100vh",
  },
});
var HomePage = () => {
  var classes = useStyles();
  return (
    <div>
      <Header />
      <NewsCont />
    </div>
  );
};
export default HomePage;
