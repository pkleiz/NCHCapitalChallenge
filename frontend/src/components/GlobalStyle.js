import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
    }
    body{
        background:#ffffff;
        overflow-x:hidden;
        text-decoration: none;
    }
    button{
        font-weight:bold;
        font-size: 1.1.rem;
        cursor:pointer;
        padding: 1rem 2rem;
        background: transparent;
        color:white;
        border: 3px solid #416cd5;
        transition: all 0.5s ease;
        &:hover{
            background-color:#23d997;
            color: white;
        }
    }
    h2{
        font-weight:300;
        font-size:4rem;
        color:#446084;
        margin-left:20px;
    }
    h3{
        font-weight:lighter;
        font-size:2rem;
        margin-left:30px;
    }
    a{
        font-size:1.1.rem
    }
    span{
        font-weight: ligher;
        color:#416cd5
    }
    p{
        padding:3rem 0rem;
        color: #416cd5;
        font-size: 2.4rem;
        line-height:150%;
    }
`;

export default GlobalStyle;
