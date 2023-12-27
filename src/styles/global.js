import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Pathway+Extreme&display=swap');

* {
    margin : 0;
    padding : 0;
    box-sizing : border-box;
    scroll-behavior: smooth;
    font-family: 'Pathway Extreme', sans-serif;
    background-color: ${({theme}) => theme.backgroundColor};
    // color: ${({theme}) => theme.textColor};
    transition: 0.2s all ease-in-out;
}

a {
    text-decoration : none;
    color: ${({theme}) => theme.aColor};
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.8rem;
}

a:hover {
    color: ${({theme}) => theme.textColor};
}

a.active {
    color: ${({theme}) => theme.textColor};
}

li {
    list-style-type : none;
} 

// ******************* navbar styles ******************

.navbar-container {
    position: fixed;
    width : 100%;
    z-index: 1;
    opacity: 0.9;
}

.navbar {
    display : flex;
    justify-content : space-between;
    align-items: center;
    height : 8vh;
    padding: 2rem;
}

.logo p {
    font-size: 1.2rem;
    font-weight: bold;
    font-family: monospace;
    letter-spacing: 0.05rem;
    color: ${({theme}) => theme.textColor};
}
.nav-container {
    letter-spacing: 0.15rem;
    display : flex;
    justify-content : space-between;
    width: 40%;
}

.theme-container {
    display: flex;
    justify-content : space-between;
    align-items: center;
    width: 12%;
}

// ******************** hero section styles *****************

.hero-desc {
    width: 95%;
}

.hi p {
    color: ${({theme}) => theme.aColor};
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 0.1rem;
    background-color: ${({theme}) => theme.textColor};
}

.hero-desc p {
    color: ${({theme}) => theme.bColor};
    text-align: center;
    letter-spacing: 0.1rem;
}

.name-card {
    border-radius: 1rem;
    width: 40%;
    padding: 1rem 2rem;
    display: flex;
    background-color: ${({theme}) => theme.textColor};
    justify-content: space-between;
    align-items: center;
    box-shadow: ${({theme}) => theme.textColor} 10px 10px 100px;
}

.position-card {
    margin-right: -8rem;
    margin-top: 3rem;
    border-radius: 1rem;
    padding: 0.8rem;
    background-color: ${({theme}) => theme.textColor};
    display: flex;
    flex-direction: column;
}

.position-card div {
    margin-left: auto;
    text-align: right;
    letter-spacing: 0.05rem;
}

.position-card span {
    color: #F1F1F1;
    margin-right: 0.5rem;
    font-size: 0.9rem;
}

.position-card div, .position-card span  {
    background-color: ${({theme}) => theme.textColor};
}

.hi-logo span {
    background-color: ${({theme}) => theme.textColor};
}

.hi-logo {
    animation-name: hello;
    animation-duration: 0.8s;
    animation-timing-function: linear;
    animation-direction: ease-in-out;
    animation-iteration-count: infinite;
    transform: translateZ(0px);
}

@keyframes hello {
    0% {
        transform: rotate(0deg);
    }
    
    50% {
        transform: rotate(25deg);
    }

    100% {
        transform : rotate(0deg);
    }
}

.my-name h1 {
    background-color: ${({theme}) => theme.textColor};
    font-size: 2.5rem;
    letter-spacing: 0.2rem;
    color: ${({theme}) => theme.backgroundColor};
}

.hero-section {
    position: absolute;
    height: 90vh;
    width: 90%;
    margin-left : 5%;
    margin-top: 5rem;
    // border: 1px solid red;
}

.hero-container {
    width: 70%;
    margin: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.social-links-container {
    display: flex;
    justify-content: space-between;
    margin-top: 10rem;
    margin-bottom: -3rem;
    width: 30%;
    cursor: pointer;
}

.social-icons {
    font-size: 0.5rem;
    padding: 0.3rem;
    box-shadow: ${({theme}) => theme.boxShadowColor} 1px 1px 2px,
    ${({theme}) => theme.boxShadowColorB} -1px -1px 2px;
    border-radius: 5px;
}

.social-icons:hover {
    color: ${({theme}) => theme.textColor};
    transform: scale(1.1);
    box-shadow: ${({theme}) => theme.textColor} 1px 1px 15px,
    ${({theme}) => theme.backgroundColor} -1px -1px 2px;
}

// *********************** about styles *******************

.about-section {
    position: absolute;
    border: 1px solid red;
    margin-top: calc(90vh + 10rem);
}

`