import styles from "@/app/[lang]/home.module.css";
import BoxWrapper from "./BoxWrapper";
const ExperimentsBox = ({ dict }) => {
  return (
    <BoxWrapper dict={dict}>Ceci est la boît des expérimentation</BoxWrapper>
  );
};

export default ExperimentsBox;
