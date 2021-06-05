import { Link } from "react-router-dom";
import "../../App.css";
import ImgHome from "../../images/LATF/47.jpg";
import Image from "../../components/Image";
import TransitionPage from "../../components/pageTransition";
import {
  HeaderHome,
  HeaderWrapper,
  HomePage,
  Phrase,
  SubTitle,
} from "./styles";

const Home = () => {
  return (
    <TransitionPage>
      <HomePage>
        <HeaderWrapper>
          <HeaderHome>hidden focus</HeaderHome>
          <SubTitle>Photography by Ray Hanson</SubTitle>
        </HeaderWrapper>
        <div
          className="img-hover-zoom"
          style={{ width: "45%", margin: "0 auto" }}
        >
          <Link to="/gallery">
            <Image pic={ImgHome} />
          </Link>
        </div>
        <Phrase>Each of our lives is a different way of seeing</Phrase>
      </HomePage>
    </TransitionPage>
  );
};
export default Home;
