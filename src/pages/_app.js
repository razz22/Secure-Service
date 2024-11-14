import MasterLayout from "@/components/Layouts/MasterLayout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <MasterLayout>
      <Component {...pageProps} />
    </MasterLayout>
  );
}
