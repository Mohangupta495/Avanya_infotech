import React, { Component } from 'react'
import "./solution.css";
import WaveImg from "../assets/images/backb.svg";
import CardSolution from '../small-components/CardSolution';
import { solutionData } from '../constants';

export default class Soulution extends Component {
  render() {
    return (
      <>
      <div class="container_all" id="container__all" style={{width:"100%"}}>
        <div class="cover">

            {/* <div class="bg_color"></div> */}
            {/* <div class="wave w1"></div> */}
            {/* <div class="wave w2"></div> */}
            <div class="container__cover">
                <div class="container__info">
                    <h1>BUILD YOUR</h1>
                    <h2>BUSINESS</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aut impedit ea debitis ab, amet ipsa ipsum odio magnam voluptatem dicta praesentium obcaecati facilis, nulla fugiat itaque repellendus eaque tempora.</p>
                    <input type="button" value="Get Started"/>
                </div>
                <div class="">
                    <img src={WaveImg} alt=""/>
                </div>
            </div>
        </div>
    

        <div class="body__page">

            <div class="container__card">
                {solutionData.map((data,index)=>{
                    return <CardSolution img={data.img} heading={data.heading} title={data.title} index={index}/>                
                })}              
            </div>

        </div>        
</div>
      </>
    )
  }
}
