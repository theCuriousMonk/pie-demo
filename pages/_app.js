import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head';
import '../css/tailwind.css'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    
    return { pageProps };
  }
  
  render() {
    const { Component, pageProps } = this.props;
    
    return (
      <Container>
      <Head>
      <link
      href="https://fonts.googleapis.com/css?family=Roboto"
      rel="stylesheet"
      key="google-font-cabin"
      />
      <link 
      href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" 
      rel="stylesheet" 
      />
      </Head>
      
      <Component {...pageProps} />
      
      <style global jsx>{`
      body {
        font-family: 'Roboto', sans-serif;
      }
      
      .carousel-open:checked + .carousel-item {
        position: static;
        opacity: 100;
      }
      .carousel-item {
        -webkit-transition: opacity 0.6s ease-out;
        transition: opacity 0.6s ease-out;
      }
      #carousel-1:checked ~ .control-1,
      #carousel-2:checked ~ .control-2,
      #carousel-3:checked ~ .control-3 {
        display: block;
      }
      .carousel-indicators {
        list-style: none;
        margin: 0;
        padding: 0;
        position: absolute;
        bottom: 2%;
        left: 0;
        right: 0;
        text-align: center;
        z-index: 10;
      }
      #carousel-1:checked ~ .control-1 ~ .carousel-indicators li:nth-child(1) .carousel-bullet,
      #carousel-2:checked ~ .control-2 ~ .carousel-indicators li:nth-child(2) .carousel-bullet,
      #carousel-3:checked ~ .control-3 ~ .carousel-indicators li:nth-child(3) .carousel-bullet {
        color: #2b6cb0;  /*Set to match the Tailwind colour you want the active one to be */
      }
      
      .dropdown {
        position: relative;
        display: inline-block;
      }
      
      .dropdown-content {
        display: none;
        position: relative;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
      }
      
      .dropdown-content a {
        color: black;
        text-decoration: none;
        display: block;
      }
      
      .dropdown-content a:hover {background-color: #f1f1f1}
      
      .dropdown:hover .dropdown-content {
        display: block;
      }

{/* slideshow */}
      .slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active {
  background-color: #717171;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .text {font-size: 11px}
}
      
      `}</style>
      </Container>
      );
    }
  }