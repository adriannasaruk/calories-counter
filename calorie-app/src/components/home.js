import React from "react"

export default function Home(){
    return(
        <div class="home">
            <h1 className= "h1">Calorie-Counter</h1>
            <h3>Watch your calories by filling your consumed calories into your own personal calendar. Based on your consumed calories the background of the calendar day will either appear green or red. That gives you a good overlook on your overall performance and will boost your motivation if you failed to eat the right amoun of calories. That red color will look evil!</h3>
            <div class="button">
                <button>Sign Up here!</button>
                <button>Login</button>
            </div>
        </div>
    )
}