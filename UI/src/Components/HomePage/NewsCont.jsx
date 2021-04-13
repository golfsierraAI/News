import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import NewsContentAction from "../../Actions/NewsContentAction";

var NewsCont = () => {
  var disp = useDispatch();
  var news = useSelector((state) => {
    return state.NewsContentReducer.init;
  });
  async function submit() {
    try {
      const response = await axios.post("/home");
      disp(NewsContentAction(response.data));
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    submit();
  }, []);

  return (
    <div>
      {news &&
        news.map((i) => {
          return <h6>{i.title}</h6>;
        })}
    </div>
  );
};
export default NewsCont;
