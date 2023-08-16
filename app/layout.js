import "./globals.css";
import { Inter, Roboto } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const baskerville = localFont({
  src: [
    {
      path: "../utils/fonts/baskerville-urw.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../utils/fonts/baskerville-urw-italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
});

export const metadata = {
  title: "TheMindCo - Innovation and Growth Strategy Consulting",
  description: "TheMindCo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/cropped-favicon-1-32x32.png"
          sizes="32x32"
          type="image/png"
        />
      </head>
      <body className={`${roboto.className} ${baskerville.className}`}>
        {children}
      </body>
    </html>
  );
}
