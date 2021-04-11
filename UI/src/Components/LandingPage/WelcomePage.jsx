import Login from "./Login";
import SignUp from "./SignUp";
const WelcomePage = () => {
  return <>{true ? <Login /> : <SignUp />}</>;
};
export default WelcomePage;
