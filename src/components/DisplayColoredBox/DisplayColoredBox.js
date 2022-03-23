import styled from "styled-components";

const DisplayColoredBox = styled.div`
    display: inline-block;
    margin: 10px;
    background-color: ${props => props.box.color};
    width: ${props => props.box.size}px;
    height: ${props => props.box.size}px;
`;

export default DisplayColoredBox;