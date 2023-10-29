import React, { Component } from 'react'
import "./solution.css";
import WaveImg from "../assets/images/undraw_Code_thinking_re_gka2.svg"

export default class Soulution extends Component {
  render() {
    return (
      <>
      <div class="container_all" id="container__all">
        <div class="cover">

            <div class="bg_color"></div>
            <div class="wave w1"></div>
            <div class="wave w2"></div>

            <div class="container__cover">
                <div class="container__info">
                    <h1>BUILD YOUR</h1>
                    <h2>BUSINESS</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aut impedit ea debitis ab, amet ipsa ipsum odio magnam voluptatem dicta praesentium obcaecati facilis, nulla fugiat itaque repellendus eaque tempora.</p>
                    <input type="button" value="Get Started"/>
                </div>
                <div class="container__vector">
                    <img src={WaveImg} alt=""/>
                </div>
            </div>
        </div>



    

        <div class="body__page">

            <div class="container__card">

                <div class="card c1">
                    <div class="icon">
                        <i class="fab fa-html5"></i>
                    </div>
                    <div class="info__description">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, repellendus dolor dolorem voluptate aut expedita doloribus molestias modi libero excepturi cum perferendis laboriosam praesentium provident suscipit, eius impedit quidem magnam ipsa similique necessitatibus nam delectus nesciunt magni! Temporibus autem, reprehenderit amet quidem aliquid architecto, blanditiis, neque quam asperiores eum enim.</p>
                        <input type="button" value="Leer Más"/>
                    </div>
                </div>

                <div class="card c2">
                    <div class="icon">
                        <i class="fab fa-css3"></i>
                    </div>
                    <div class="info__description">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, repellendus dolor dolorem voluptate aut expedita doloribus molestias modi libero excepturi cum perferendis laboriosam praesentium provident suscipit, eius impedit quidem magnam ipsa similique necessitatibus nam delectus nesciunt magni! Temporibus autem, reprehenderit amet quidem aliquid architecto, blanditiis, neque quam asperiores eum enim.</p>
                        <input type="button" value="Leer Más"/>
                    </div>
                </div>

                <div class="card c3">
                    <div class="icon">
                        <i class="fab fa-js-square"></i>
                    </div>
                    <div class="info__description">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, repellendus dolor dolorem voluptate aut expedita doloribus molestias modi libero excepturi cum perferendis laboriosam praesentium provident suscipit, eius impedit quidem magnam ipsa similique necessitatibus nam delectus nesciunt magni! Temporibus autem, reprehenderit amet quidem aliquid architecto, blanditiis, neque quam asperiores eum enim.</p>
                        <input type="button" value="Leer Más"/>
                    </div>
                </div>

                

            </div>

        </div>        
</div>
      </>
    )
  }
}
