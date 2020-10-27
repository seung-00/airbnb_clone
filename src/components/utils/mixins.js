import { css } from "styled-components"

export const breakpoints = {
    mobile: '480px',
    tablet: '740px',
    desktop: '1280px',
  }  

export const respondTo = Object.keys(breakpoints).reduce((accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (min-width: ${breakpoints[label]}) {
        ${css(...args)};
      }
    `
    return accumulator
  }, {})