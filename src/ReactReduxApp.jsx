import { Provider } from "react-redux";
import { taskStore } from "./components/projects/ReactRedux/store/store";
import ReactRedux from "./components/projects/ReactRedux/pages/ReactRedux";

const ReactReduxApp = () => {
  <Provider store={taskStore}>
    <ReactRedux />
  </Provider>;
};

export default ReactReduxApp;
