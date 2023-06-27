import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <Presentational>
        {displayedValue}
        <IconWrapper style={{ "--size": "18px" }}>
          <Icon id="chevron-down" strokeWidth={2} size={18} />
        </IconWrapper>
      </Presentational>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
  isolation: isolate;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  appearance: none;
  /* z-index: 2; */
`;

const Presentational = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.gray50};
  border-radius: 8px;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  padding: 12px 16px;
  padding-right: 48px;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  height: var(--size);
  /* z-index: 1; */
  pointer-events: none;
`;

export default Select;
