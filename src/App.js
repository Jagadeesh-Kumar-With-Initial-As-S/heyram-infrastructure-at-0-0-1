import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import dummyText from "./DummyText";
import { Button } from "react-scroll";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <main className="scroll-container">
                    <section
                        title="Home"
                        subtitle={dummyText}
                        dark={false}
                        id="section1"
                    >
                        <center><video className="elementor-video" src="https://zprincesssaffron.com/wp-content/uploads/2023/09/WhatsApp-Video-2023-09-04-at-18.11.07.mp4" autoplay="" loop muted="muted" playsinline="" controlslist="nodownload"></video>
                        </center>

                        <center>
                            <div>

                                <div style={{ color: "violet" }}>Vision</div>

                                The main vision of our company is to give high quality saffron, best flavour and aroma for our products, and to give 100% natural products to reach out customers.

                            </div>
                        </center >

                    </section>
                    <section
                        title="About Us"
                        subtitle={dummyText}
                        dark={false}
                        id="section2"
                    >
                        <div>
                            <center><video className="elementor-video" src="https://zprincesssaffron.com/wp-content/uploads/2023/09/WhatsApp-Video-2023-09-04-at-18.11.07.mp4" autoplay="" loop muted="muted" playsinline="" controlslist="nodownload"></video>
                            </center>
                            <br />      <div style={{ color: "violet" }}>Our's</div>
                            Z Princess saffron produces and manufacture saffron from different countries. This company was opened in the year 2023. The Z Princess saffron is the 1st saffron brand in the Kashmir.
                            <br />           A1 Quality products are being exported and too costly to afford so we are helping our customer by providing high quality and fresh products at affordable prices with attractive packing
                            <br />        Z Princess customer are mostly attracted by packing and satisfied with quality after consuming
                            <br />
                            <br />       <div style={{ color: "violet" }}>Our Mission</div>
                            We are on a mission to make the practice of self-care a simple, joyful and effective part of your everyday.
                            <br /><br />
                        </div>
                    </section>
                    <section
                        title="Products"
                        subtitle={dummyText}
                        dark={false}
                        id="section3"
                    >

                        <div>
                            <center><video className="elementor-video" src="https://zprincesssaffron.com/wp-content/uploads/2023/09/WhatsApp-Video-2023-09-04-at-18.11.07.mp4" autoplay="" loop muted="muted" playsinline="" controlslist="nodownload"></video>
                            </center>
                            <div style={{ color: "violet" }}>Our Product</div>
                            Natural Spices Adding Magic to your Meal Makes you to recommend to Others is Guaranteed
                            <br />
                            <br />  Brand : Z-Princess Saffron
                            <br />              Variety : Saffron
                            <br />             Orign: Indian Kashmir
                            <br />             Item from : Threads
                            <br />              Weights : 7.05 grams
                            <br />              Price: ₹ 3625    ₹ 2538
                            <br />        <Button>      ADD TO CART</Button>
                            <br />
                            <br />             Brand : Z-Princess Saffron
                            <br />              Variety : Saffron
                            <br />        Orign: Spain Saffron
                            <br />          Item from : Threads
                            <br />          Weights : 5 grams
                            <br />           Price:  ₹ 2875
                            <br />             <Button>      ADD TO CART</Button>


                        </div>
                    </section>
                    <section
                        title="Contact US"
                        subtitle={dummyText}
                        dark={false}
                        id="section4"
                    >

                        <i class="fa fa-phone-square" aria-hidden="true">Phone : +9172001 50577</i>

                        <i class="fa fa-envelope-o" aria-hidden="true">Email : Zprincesssaffron@gmail.com</i>

                        <i class="fa fa-map-marker" aria-hidden="true">Address : NO. 21 ,2ND STREET, RAMAMOORTHI AVENUE, SAKTHI NAGAR, PORUR,CHENNA1-600116,TN,INDIA</i>


                    </section>
                </main>
            </div >
        );
    }
}

export default App;
