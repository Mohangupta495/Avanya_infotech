import React, { Component } from 'react'
import IconImg from "../assets/icons/s1.png"
export default class CardSolution extends Component {
  render() {
    return (
        <div class={`card c${this.props.index}`}>
        <div class="icon">
            {/* <i class="fab fa-html5"></i> */}
            <img src={this.props.img} width={"100%"} height={"80%"} style={{width:"90%",height:"100%"}}/>
        </div>
        <div class="info__description">
            <h1>{this.props.heading}</h1>
            <p>{this.props.title}</p>
            {/* <input type="button" value="Leer Más"/> */}
        </div>
    </div>
    )
  }
}
