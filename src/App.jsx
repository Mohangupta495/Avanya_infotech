import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import SideMenuBar from "./components/SideMenuBar";
import UpdateData from "./small-components/Testing";
import ContactUs from "./components/ContactUs";
import './components/navbar.css'

const App = () => (
  <div style={{overflowX:"hidden",width:"100%"}}>
    <SideMenuBar/>
    <div className="bg-primary w-full overflow-hidden mainDivCompon">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        {/* <Clients /> */}
        <ContactUs/>
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
  </div>
  
);

export default App;
