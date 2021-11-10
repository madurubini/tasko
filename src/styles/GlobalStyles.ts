import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{    
      margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        list-style-type: none;
}

body {
    max-width: 100vw;
    min-height: 100vh;
    font-family: 'Oxanium', cursive;
}


:root {
    --background: #050303;
    --font-color: #ffffff;
    --input-background: #66696D;
    --button-green:  linear-gradient(117.51deg, #94FF96 0%, rgba(61, 194, 75, 0.83) 68.22%);
    --button-black:linear-gradient(122.01deg, #585F73 0.96%, #2C2F40 86.54%);
    --green-linear: linear-gradient(132.9deg, #63F7A1 1.3%, #27AE60 98.06%), linear-gradient(143.36deg, #94FF96 3.66%, #3DC24B 103.19%);
    --title: font-family: 'Inter', sans-serif;
    --subTitle: font-family: 'Press Start 2P', cursive;
    --redToast :#FF0000;
    --yellowToast: #FFD700;
    --greenToast: #008000;
    --blueToast:#155BCB;
    --black-gradient: linear-gradient(309.43deg, #2C2F40 0.96%, #2C2F40 5.98%, #000000 89.08%, #050303 98.43%);
}

button {
    cursor: pointer;
    background: none;
    border: none;
    &:hover{
         filter: brightness(0.8);
       }
}

a {
    text-decoration: none;
}

img {
    object-fit: cover;
}

`;
