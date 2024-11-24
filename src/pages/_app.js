import MasterLayout from "@/components/Layouts/MasterLayout";
import store, { persistor } from "@/features/redux/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MasterLayout>
          <Component {...pageProps} />
        </MasterLayout>
      </PersistGate>
    </Provider>
  );
}
