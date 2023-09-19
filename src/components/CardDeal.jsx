import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Avinya Market Place Portal Is Used For All<br className="sm:block hidden" />Activities Of Company.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Allows companies to share their jobs and candidates at one place.<br></br>
      Allows users to communicate without providing confidential information to avoid spamming.<br></br>
      Candidates can upload resumes to seek jobs independently.<br></br>
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
