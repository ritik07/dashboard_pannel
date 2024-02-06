import Router from "./routes/routes";
import { Provider } from "react-redux";
import "./styles/index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { store } from "./redux";

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
