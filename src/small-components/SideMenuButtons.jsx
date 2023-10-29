import React, { Component } from 'react'
import "./sideMenuButtons.css"
import { navigateToScreen } from '../constants/utils'

export default class SideMenuButtons extends Component {
  render() {
    return (
      <a href={`/${this.props.link}`}>
      <div className='flex gap-4 text-center items-center cursor-pointer side-menu-button' style={{color:"#33bbcf"}} >
        <this.props.icon size={22}/>
        <p style={{fontWeight:300,fontSize:14,display:this.props.isShowFullMenu?'block':'none'}}>{this.props.name}</p>
      </div>
      </a>
    )
  }
}
