import styles from "@/app/[lang]/home.module.css";
import BoxWrapper from "./BoxWrapper";

const AboutBox = ({ dict }) => {
  return (
    <BoxWrapper dict={dict}>
      Ceci est la desription de ce blog. Il faudra aussi la traduire en anglais
      attention
    </BoxWrapper>
  );
};

export default AboutBox;
