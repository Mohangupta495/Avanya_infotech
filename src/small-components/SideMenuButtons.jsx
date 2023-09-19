import React, { Component } from 'react'
import "./sideMenuButtons.css"
import { navigateToScreen } from '../constants/utils'

export default class SideMenuButtons extends Component {
  render() {
    return (
      <div className='flex gap-4 text-center items-center cursor-pointer side-menu-button' style={{color:"#33bbcf"}} onClick={()=>{navigateToScreen(`#${this.props.id}`)}} >
        <this.props.icon size={22}/>
        <p style={{fontWeight:300,fontSize:14,display:this.props.isShowFullMenu?'block':'none'}}>{this.props.name}</p>
      </div>
    )
  }
}
