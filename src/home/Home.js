import "./Home.scss";
import Hoc from "../hoc/Hoc";

function Home(probs) {
  return (
    <div>
      <button onClick={probs.incerement}>clickhere${probs.count}</button>
    </div>
  );
}
// export default Home;
export default Hoc(Home);
