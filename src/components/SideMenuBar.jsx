import React, { Component } from "react";
import { close, logo, menu } from "../assets";
import { linksForSideMenu, navLinks } from "../constants";
import SideMenuButtons from "../small-components/SideMenuButtons";
import Button from '@mui/material/Button';
import "./navbar.css"
import { navigateToScreen } from "../constants/utils";

export default class SideMenuBar extends Component {
    constructor(props){
        super(props);
        this.state={
            isShowFullMenu:false,
        }
    }
  render() {
    const {isShowFullMenu}=this.state;
    const sideMenuClassName = `h-full fixed left-0 top-0 p-5 sideMenu lg:sideMenu ${
        this.props.isMenuOpen ? '' : 'hidden lg:block'
      }`;
    return (
      <div className={sideMenuClassName} onMouseOver={()=>{this.setState({isShowFullMenu:true})}}  onMouseOut={()=>{this.setState({isShowFullMenu:false})}} style={{width:!isShowFullMenu?"70px":"auto"}}>
        <div className="flex ">
          <img src={logo} alt="hoobank" className="w-[34px] h-[34px]" />

          {isShowFullMenu && <div className="logoTextForSideMenu">
            <p>Avaniya </p>
            <span className="text-gradient">Technology</span>
          </div>}
        </div>
        <div className="mt-10 flex gap-9 flex-col">
            {linksForSideMenu.map((button)=>{
                return(<SideMenuButtons name={button.title} icon={button.icon} isShowFullMenu={this.state.isShowFullMenu} id={button.id}/>)
            })}
        </div>
        {isShowFullMenu && <Button variant="contained" style={{background:"#cf1212",width:"100%",marginTop:'60px'}} onClick={()=>{navigateToScreen("#contact")}} >Contact US</Button>}
        
        {isShowFullMenu && <div className="flex flex-col items-center justify-center p-10 absolute bottom-32">
            <p style={{color:"rgb(123 135 137)",fontSize:13}}>Have any questions?</p>
            <p style={{color:"#33bbcf",fontSize:15}}>info@avinyait.com</p>
        </div>}
        {isShowFullMenu && <div className="flex flex-row items-center justify-between absolute bottom-24" style={{width:"80%"}}>
        <div className="flex flex-col items-center justify-center">
            <p style={{color:"#33bbcf",fontSize:13}}>Facebook</p>
            <p style={{color:"#33bbcf",fontSize:13}}>Linkedin</p>
        </div>
        <div className="flex flex-col items-center justify-center">
        <p style={{color:"#33bbcf",fontSize:13}}>Twitter</p>
        <p style={{color:"#33bbcf",fontSize:13}}>Instagram</p>
        </div>
        </div>}
        {isShowFullMenu && <div className="absolute bottom-5" style={{width:"80%"}}>
        <p style={{color:"rgb(123 135 137)",fontSize:13,textAlign:"center"}}>Copyright © 2023 Avinya IT. All Right Reserved</p>
        </div>}
        
      </div>
    );
  }
}
