import styles from "./HomePage.module.css";

import Attributes from "../modules/Attributes";
import Banner from "../modules/Banner";
import Definition from "../modules/Definition";
import Companies from "../modules/Companies";
import Instruction from "../modules/Instruction";
import Guide from "../modules/Guide";
import Restrictions from "../modules/Restrictions";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Banner />
      <Attributes />
      <Definition />
      <Companies />
      <Instruction />
      <Guide />
      <Restrictions />
    </div>
  );
};

export default HomePage;
