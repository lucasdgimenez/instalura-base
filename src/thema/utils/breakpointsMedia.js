/* eslint-disable no-unused-expressions */
/* eslint-disable arrow-body-style */
import { css } from 'styled-components';
import theme from '../index';

const { breakpoints } = theme;

export function breakpointsMedia(cssByBreakpoints) {
  const breakpointsNames = Object.keys(cssByBreakpoints);
  return breakpointsNames
    .map((breakpointName) => css`
      @media screen and (min-width: ${breakpoints[breakpointName]}px) {
        ${cssByBreakpoints[breakpointName]}
      }
    `);
}
