import styles from "@/app/[lang]/home.module.css";
import BoxWrapper from "./BoxWrapper";
const AboutBox = async ({ dict, lang }) => {
  const module = await import(`@/content/about/${lang}.mdx`);
  const About = module.default;

  return (
    <BoxWrapper dict={dict}>
      <About />
    </BoxWrapper>
  );
};

export default AboutBox;
