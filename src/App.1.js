import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import dummyText from "./DummyText";

export class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />

                <Section
                    title="Home"
                    subtitle={dummyText}
                    dark={true}
                    id="section1" />
                <center><video className="elementor-video" src="https://zprincesssaffron.com/wp-content/uploads/2023/09/WhatsApp-Video-2023-09-04-at-18.11.07.mp4" autoplay="" loop="" muted="muted" playsinline="" controlslist="nodownload"></video>
                </center>
                <center>
                    <div>

                        Vision
                        <br />
                        The main vision of our company is to give high quality saffron, best flavour and aroma for our products, and to give 100% natural products to reach out customers.

                    </div>
                </center>
                <Section
                    title="About Us"
                    subtitle={dummyText}
                    dark={false}
                    id="section2" />

                <Section
                    title="Products"
                    subtitle={dummyText}
                    dark={true}
                    id="section3" />
                <Section
                    title="Contact US"
                    subtitle={dummyText}
                    dark={false}
                    id="section4" />
            </div>
        );
    }
}
