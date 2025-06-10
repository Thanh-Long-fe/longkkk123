import { store } from "./reduxx/store";
import Router from "./router";
import { Provider } from 'react-redux';

export default function App() {
  return (
    <>
      <Provider store={store}>
      <Router />
      </Provider>
    </>
  );
}
