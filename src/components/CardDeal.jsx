import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        We grant you power <br className="sm:block hidden" /> over
        your finances.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Ovation gives you the power to control not 
        just today's financial needs, but also tomorrow's investment plans.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
