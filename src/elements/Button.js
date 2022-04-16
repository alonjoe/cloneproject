import React, { Children } from "react";
import styled from "styled-components"
import Flex from "./Flex";

const Button = props => {
    const {
        margin,
        padding,
        width,
        height,
        color,
        border,
        bg,
        _onClick,
        left,
        right,
        ai,
        fontSize,
        chidren,
    } = props;

    const styles = {
        margin,
        padding,
        width,
        height,
        color,
        border,
        bg,
        _onClick,
        left,
        right,
        ai,
        fontSize,
    };

    return (
        <Buttonstyle {...styles} onClick={() => _onClick()}>
            {Children}
        </Buttonstyle>
    );
};

Button.defaultProps = {
    margin: "",
    width: "100%",
    height: "",
    color: "#eee",
    padding: "5px",
    bg: "#35a0b8",
    fontSize: "16px",
    border: "none",
    borderR: "8px",
    _onClick: () => {},
};

const Buttonstyle = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    border: ${props => props.border};
    border-radius: ${props => props.borderR};
    border-bottom: ${props => props.borderBottom};
    box-shadow: ${props => props.boxS};
    gap: ${props => props.gap};
    z-index: ${props => props.zIndex};
    position: ${props => props.position};
    top: ${props => props.trbl[0]};
    right: ${props => props.trbl[1]};
    bottom: ${props => props.trbl[2]};
    left: ${props => props.trbl[3]};
    display: flex;
    flex-direction: ${props => props.fd};
    justify-content: ${props => props.jc};
    align-items: ${props => props.ai};
    background-color: ${props => props.bg};
    overflow: ${props => props.overflow};
    color: ${props => props.color};
`;

export default Flex;