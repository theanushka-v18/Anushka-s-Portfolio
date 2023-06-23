import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Pathway+Extreme&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.3s ease-in-out;
    background-color: #101010;
    font-family: 'Pathway Extreme', sans-serif;
}

a {
    text-decoration: none;
    color: #dde6ed;
    font-weight: bold;
    font-size: 1rem;
    margin-right: 2rem;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
}

a.active {
    color: #9575de;
}

.navbar-container {
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    margin-top: 1rem;
}

.error-page {
    height: 70vh;
    max-width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.error-page .number {
    font-size: 8rem;
    color: #20262e;
}

.error-page .pnf {
    font-size: 1.5rem;
    color: #20262e;
}

.error-page a {
    background-color: #9575de;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    margin-top: 3rem;
}

.error-page a:hover {
    transform: scale(1.1);
}

.home-page {
    // border: 1px solid red;
    height: 90vh;
    max-width: 90%;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.intro {
    max-width: 50%;
}

.my-photo {
    border-radius: 1rem;
    padding: 5rem 2rem;
    background-color: #101010;
    box-shadow: 2px 2px 15px #9575de, 
            -3px -3px 10px #080707;
    animation: photoUpDown 1s alternate infinite;
}

@keyframes photoUpDown {
    from {
        margin-top: -1rem;
    }
    to {
        margin-top: 2.5rem;
    }
}

.my-photo img {
    border-radius: 50%;
    width: 8rem;
    border: 5px solid #9575de;
}

.hi {
    color: #dde6ed;
    font-size: 1.35rem;
}

.my-name {
    color: #9575de;
    font-size: 4rem;
    letter-spacing: 0.3rem;
}

p {
    color: #20262e;
    font-weight: bold;
    font-size: 1.1rem;
}

.home-icons {
    margin-top: 3rem;
}

.home-icons .contact-icons {
    transform: scale(1.5);
    background-color: #101010;
    box-shadow: 1px 1px 1px #5c5b5b, 
            -1px -1px 2px #080707;
    color: #9575de;
    padding: 0.2rem;
    border-radius: 5px;
    margin-left: 0.5rem;
}

.home-icons .contact-icons:hover {
    transition: all 0.3s ease-in-out;
    transform: scale(2);
}

.footer {
    max-width: 90%;
    margin: 0 auto;
    margin-bottom: 1rem;
    margin-top: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.footer a {
    color: #9575de;
    background-color: transparent;
}

.footer span {
    color: red;
}

.footer h4 {
    letter-spacing: 0.1rem;
    color: #dde6ed;
}

.about-page, .projects-page {
    max-width: 90%;
    margin: 0 auto;
    margin-top: 8rem;
}

.about-page h1, .projects-page h1 {
    color: #dde6ed;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
}

.about-page p, .projects-page p {
    margin-top: 1rem;
    text-align: center;
}

.para-div {
    width: 60%;
    margin: 0 auto;
}

.underline-span {
    display: block;
    height: 0.4rem;
    width: 2rem;
    margin: 0 auto;
    border-radius: 5px;
    background-color: #9575de;
    margin-top: 0.5rem;
}

.inside-about h1 {
    color: #9575de;
    font-size: 1.35rem;
    text-align: left;
    margin-top: 2rem;
}

.education, .experience {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
}

.about-card-container {
    padding: 0.5rem;
    text-align: center;
    border-radius: 1rem;
    width: 30%;
    // border-color: linear-gradient(#9575de, #5c5b5b);
    box-shadow: 3px 3px 1px #9575de, 
            -3px -3px 2px #dde6ed;
}

.about-card-container:hover {
    animation: borderChanges 0.5s linear infinite;
}

@keyframes borderChanges {
    0% {
        box-shadow: 3px 3px 1px #dde6ed, 
            -3px -3px 2px #9575de;
    },
    25% {
        box-shadow: 3px 3px 1px #9575de, 
            -3px -3px 2px #dde6ed;
    },
    50% {
        box-shadow: 3px 3px 1px #dde6ed, 
            -3px -3px 2px #9575de;
    },
    75% {
        box-shadow: 3px 3px 1px #9575de, 
            -3px -3px 2px #dde6ed;
    },
    100% {
        box-shadow: 3px 3px 1px #dde6ed, 
            -3px -3px 2px #9575de;
    }
}

.about-card {
    color: #dde6ed;
}

.about-card-container:hover {
    transform: scale(1.1);
}

.about-card h5 {
    letter-spacing: 0.1rem;
    font-weight: 100;
    margin-top: 0.5rem;
}

.about-card-container img {
    width: 2rem;
    border-radius: 50%;
}

.project-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;
    margin-top: 2rem;
    width: 100%;
}

.project-card {
    box-shadow: 4px 4px 3px #5c5b5b, 
            -5px -5px 4px #080707;
    width: 30%;
    cursor: pointer;
    padding: 1rem;
    border-radius: 1rem;
}

.project-card:hover {
    transform: scale(1.1);
    box-shadow: 4px 4px 2px #9575de, 
            -5px -5px 3px #080707;
}

.project-card img {
    width: 100%;
    border-radius: 1rem;
    border: 2px solid #9575de
}

.project-card h3 {
    color: #9575de;
}

.project-card p {
    color: #dde6ed;
    font-size: 0.8rem;
    font-weight: 100;
    text-align: left;
    margin-bottom: 1rem; 
}

.project-card a:hover {
    color: #9575de;
}

`