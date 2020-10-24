import React from 'react'
import styled, { css } from 'styled-components'


const StyledButton = styled.button`
    display: flex;
    border-radius: 24px;
    background: transparent;
    border: 1px solid transparent;
    align-items: center;
    text-align: left;
    outline: none;
    cursor: point;
    height: 48px;

    ${props =>
        props.grayBackground && 
        css`
            &:hover {
                background-color: #f1f2f6;
            }
        `
    }

    ${props =>
        props.shadow && 
        css`
            &:hover {
                box-shadow: 0 1.5px 2.5px 1.5px rgba(0, 0, 0, 0.1);
                transition: box-shadow;
                transition-duration: 0.4s;
            }
        `
    }

    ${props =>
        props.border && 
        css`
            border: 1px solid #DDDDDD;
        `
    }
`

const BaseButton = props => <StyledButton {...props} />;

export default BaseButton