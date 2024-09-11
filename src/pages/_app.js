import "@/styles/globals.css";
import { ThemeContextProvider } from "../components/ThemeContext";

export default function App({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
}
