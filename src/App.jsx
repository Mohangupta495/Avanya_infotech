import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import SideMenuBar from "./components/SideMenuBar";
import ContactUs from "./components/ContactUs";
import './components/navbar.css'
import React, { Component } from 'react'
import { Route,Routes,BrowserRouter as Router } from "react-router-dom";
import Soulution from "./components/Soulution";

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
    <Router>
            <Routes>
              <Route
                path="/"
                element={
                  <div>
                  <div className={`bg-primary ${styles.flexStart}`}>
                    <div className={`${styles.boxWidth}`}>
                      <Hero />
                    </div>
                  </div>    
                  <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                    <div className={`${styles.boxWidth}`}>
                    <CTA />
                      <Testimonials />                                            
                      <CardDeal />
                      <Billing />
                      {/* <Stats /> */}
                      <Business />
                      {/* <Clients /> */}
                      <ContactUs/>
                      <CTA />
                    </div>
                  </div>
                  </div>
                }
              />
              <Route
                path="/contact"
                element={
                  <div
                    className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}
                  >
                    <div className={`${styles.boxWidth}`}>
                      <ContactUs />
                      <CTA />
                    </div>
                  </div>
                }
              />
              <Route
                path="/product"
                element={
                  <div
                    className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}
                  >
                    <div className={`${styles.boxWidth}`}>
                    <Billing />
                      <CardDeal />
                      <CTA />
                    </div>
                  </div>
                }
              />
              <Route
                path="/about"
                element={
                  <div
                    className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}
                  >
                    <div className={`${styles.boxWidth}`}>
                      <Business />
                      <CTA />
                    </div>
                  </div>
                }
              />
              <Route
                path="/solution"
                element={
                  <div
                    className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}
                  >
                    <div className={`${styles.boxWidth}`}>
                      <Soulution />
                      <CTA />
                    </div>
                  </div>
                }
              />
              <Route
                path="/service"
                element={
                  <div
                    className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}
                  >
                    <div className={`${styles.boxWidth}`}>
                    <Testimonials />
                    <CTA />
                    </div>
                  </div>
                }
              />
              {/* <Route
                path="/testimonials"
                element={
                  <div
                    className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}
                  >
                    <div className={`${styles.boxWidth}`}>
                      <Testimonials />
                    </div>
                  </div>
                }
              />
              <Route
                path="/cta"
                element={
                  <div
                    className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}
                  >
                    <div className={`${styles.boxWidth}`}>
                      <CTA />
                    </div>
                  </div>
                }
              />*/}
            </Routes> 
          </Router>
          <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Footer />
            </div>
          </div>
  </div>
  </div>
    )
  }
}
