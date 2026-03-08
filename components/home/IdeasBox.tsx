import styles from "@/app/[lang]/home.module.css";
import BoxWrapper from "./BoxWrapper";

const IdeasBox = ({ dict }) => {
  return <BoxWrapper dict={dict}>Ceci est la boîte des articles </BoxWrapper>;
};

export default IdeasBox;
