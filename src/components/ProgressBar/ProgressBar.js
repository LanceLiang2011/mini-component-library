/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZE_STYLES = {
  small: {
    "--height": "8px",
    "--border-radius": "4px",
    "--padding": "0",
  },
  medium: {
    "--height": "12px",
    "--border-radius": "6px",
    "--padding": "0",
  },
  large: {
    "--height": "24px",
    "--border-radius": "8px",
    "--padding": "4px",
  },
};

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={90}
      style={SIZE_STYLES[size]}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <Bar style={{ "--value": `${value}%` }} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: 0px 2px 4px 0px rgba(128, 128, 128, 0.35) inset;
  height: var(--height);
  border-radius: var(--border-radius);
  padding: var(--padding);
  overflow: hidden;
`;

const Bar = styled.div`
  width: var(--value);
  background-color: ${COLORS.primary};
  height: 100%;
  border-radius: 4px 0px 0px 4px; ;
`;
export default ProgressBar;
