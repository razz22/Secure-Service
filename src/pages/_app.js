import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { useRouter } from "next/router";
import "@/styles/globals.css";
import AdminLayout from "@/components/Layouts/AdminLayout";
import MasterLayout from "@/components/Layouts/MasterLayout";
import store, { persistor } from "@/features/redux/store";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Define the layout logic
  const getLayout =
    Component.getLayout ||
    ((page) => {
      const path = router.pathname;

      // Use AdminLogin without layout for /admin/login
      if (path === "/admin/login") {
        return page; // Render the login page without any layout
      }

      // Use AdminLayout for all other /admin routes
      if (path.startsWith("/admin")) {
        return <AdminLayout>{page}</AdminLayout>;
      }

      // Default to MasterLayout for other routes
      return <MasterLayout>{page}</MasterLayout>;
    });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {getLayout(<Component {...pageProps} />)}
      </PersistGate>
    </Provider>
  );
}
