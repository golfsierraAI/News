import Header from "../header/Header";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
import InfiniteCarousel from "react-leaf-carousel";
import NewsContentAction from "../../Actions/NewsContentAction";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
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
  var disp = useDispatch();
  var news = useSelector((state) => {
    return state.NewsContentReducer.init;
  });
  async function submit() {
    try {
      const response = await axios.post("/home");
      disp(NewsContentAction(response.data));
      console.log(news);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    submit();
  }, []);
  var classes = useStyles();
  return news !== 0 ? (
    <div>
      <Header />
      <div className={classes.container}>
        <InfiniteCarousel
          showSides={false}
          scrollOnDevice={true}
          lazyLoad={true}
        >
          {news &&
            news.map((i) => {
              return <NewsCont news={i} />;
            })}
        </InfiniteCarousel>
      </div>
    </div>
  ) : null;
};
export default HomePage;
