// css
import "./globals.css";

// fonts
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ['400', '900'],
});

// sections
import Header from "@/sections/Header/Header";
import Footer from "@/sections/Footer/Footer";

// metadata
export const metadata = {
  title: "Home Page",
  description: "Home Page",
};


const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout
