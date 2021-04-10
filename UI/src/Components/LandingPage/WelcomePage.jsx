import Login from "./Login";
import SignUp from "./SignUp";
const WelcomePage = () => {
  return <>{false ? <Login /> : <SignUp />}</>;
};
export default WelcomePage;
