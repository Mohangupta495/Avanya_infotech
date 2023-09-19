import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import SideMenuBar from "./components/SideMenuBar";
import UpdateData from "./small-components/Testing";
import ContactUs from "./components/ContactUs";
import './components/navbar.css'
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      isMenuOpen:false,
    }
  }
  onMenuButtonPressed=(isShowMenu)=>{
    this.setState({isMenuOpen:isShowMenu})
  }
  render() {
    return (
      <div style={{overflowX:"hidden",width:"100%"}}>
    <SideMenuBar isMenuOpen={this.state.isMenuOpen}/>
    <div className="bg-primary w-full overflow-hidden mainDivCompon">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar onMenuButtonPressed={this.onMenuButtonPressed} isMenuOpen={this.state.isMenuOpen}/>
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
    )
  }
}
