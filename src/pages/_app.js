import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { useRouter } from "next/router";
import "@/styles/globals.css";
import AdminLayout from "@/components/Layouts/AdminLayout";
import MasterLayout from "@/components/Layouts/MasterLayout";
import store, { persistor } from "@/features/redux/store";
import Head from "next/head";
import { useEffect, useState } from "react";
import Loading from "@/components/Layouts/Loading";
export default function App({ Component, pageProps }) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

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
        <Head>
          <link rel="icon" href="/images/favicon.png" />
          <title>A4 Electronics</title>
        </Head>
        {getLayout(
          <>
            {loading && <Loading />} <Component {...pageProps} />
          </>
        )}
      </PersistGate>
    </Provider>
  );
}
