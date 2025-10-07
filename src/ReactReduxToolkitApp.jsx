import { Provider } from "react-redux";
import { taskStore } from "./components/projects/ReactReduxToolkit/store/store";
import ReactReduxToolkit from "./components/projects/ReactReduxToolkit/pages/ReactReduxToolkit";

const ReactReduxToolkitApp = () => {
  return (
    <Provider store={taskStore}>
      <ReactReduxToolkit />
    </Provider>
  );
};

export default ReactReduxToolkitApp;
