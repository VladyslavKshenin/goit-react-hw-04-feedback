import styled from "styled-components";

export const List = styled('ul') (() => {
    return {
        listStyle: "none",
        display: "inline-flex",
        gap: "12px",
        padding: "0px",
        margin: "0px",
    button: {
        width: "160px",
        height:"60px",
        backgroundColor: "rgb(255, 251, 0)",
        border: "none",
        padding: "10px",
        borderRadius: "8px",
        textTransform: "capitalize",
        fontSize: "24px",
        color: "#4f4fc2",
        boxShadow: " 0 15px 15px rgba(124, 97, 245, 0.3)",
        letterSpacing: "1px",
        transition: "all 500",
        '&:hover': {
            letterSpacing: "3px",
            background: "#7b7bf1",
            boxShadow: "0 0 5px #4f4fc2, 0 0 15px #4f4fc2, 0 0 30px #4f4fc2, 0 0 60px #4f4fc2",
            color:"white"
       }
        }
            
    }
})