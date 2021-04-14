import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import NewsContentAction from "../../Actions/NewsContentAction";
import Card from "@material-ui/core/Card";
import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    width: "50rem",
    margin: "auto",
    marginTop: "2rem",
    userSelect: "none",
  },
  btns: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  Button: {
    borderRadius: "10rem",
  },
  heading: {
    // paddingBottom: "0.5rem",
  },
  author: {
    borderBottom: "0.1rem solid black",
  },
  content: {
    marginTop: "0.5rem",
  },
  readmore: {
    position: "absolute",
    left: "1rem",
    top: "1.3rem",
    textDecoration: "none",
    fontSize: "0.5rem",
    color: "#810000",
  },
});
var NewsCont = () => {
  var classes = useStyles();
  var disp = useDispatch();
  var news = useSelector((state) => {
    return state.NewsContentReducer.init;
  });
  async function submit() {
    try {
      const response = await axios.post("/home");
      disp(NewsContentAction(response.data));
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    submit();
  }, []);

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.CardMedia}>
        <img
          style={{ height: "30rem", width: "50rem" }}
          src={news && news[2].imgURL.slice(5, -2)}
        />
      </CardMedia>
      <CardContent>
        <Typography className={classes.heading} variant="h6">
          {news && news[2].title}
        </Typography>
        <Typography className={classes.author} variant="overline">
          Author:{news && news[2].author} / Time :{news && news[2].postedAt}
        </Typography>
        <Typography className={classes.content} variant="body1">
          {news && news[2].content}
        </Typography>
      </CardContent>
      <CardActions className={classes.btns}>
        <div>
          <a className={classes.readmore} href={news && news[2].readMore}>
            Read More
          </a>
          <Button className={classes.Button}>
            <FavoriteIcon style={{ color: "#fa1e0e" }} fontSize="large" />
          </Button>
          <Button className={classes.Button}>
            <ShareIcon style={{ color: "#51c4d3" }} fontSize="large" />
          </Button>
        </div>
      </CardActions>
    </Card>
  );
};
export default NewsCont;
