// css
import Style from "./about.module.css";

// metadata
export const metadata = {
  title: "About Page",
  description: "About Page",
};

const AboutLayout = ({ children }) => {
  return (
    <main>
      {children}
    </main>
  );
}

export default AboutLayout
