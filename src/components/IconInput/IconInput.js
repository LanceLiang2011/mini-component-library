import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    "--height": `${24 / 16}rem`,
    "--border-bottom": `1px solid ${COLORS.black}`,
    "--font-size": `${14 / 16}rem`,
  },
  large: {
    "--height": `${36 / 16}rem`,
    "--border-bottom": `2px solid ${COLORS.black}`,
    "--font-size": `${18 / 16}rem`,
  },
};

const IconInput = ({ label, icon, width = 250, size, ...rest }) => {
  const iconSize = size === "small" ? 16 : 24;
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ "--height": `${iconSize}px` }}>
        <Icon id={icon} size={iconSize} />
      </IconWrapper>
      <TextInput width={width} style={STYLES[size]} {...rest} />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--height);
`;

const TextInput = styled.input`
  height: var(--height);
  width: ${(props) => `${props.width}px`};
  border: none;
  border-bottom: var(--border-bottom);
  padding-left: 24px;
  font-size: var(--font-size);
  font-weight: 700;
  outline-offset: 2px;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;
export default IconInput;
