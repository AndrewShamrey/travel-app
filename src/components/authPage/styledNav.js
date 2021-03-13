import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const BackButton = styled(NavLink)`
  padding: 16px 16px 16px 0;
  display: inline-flex;
  flex-wrap: nowrap;
  align-items: center;
  font-size: 15px;
  line-height: 24px;
  color: #fff;
  text-decoration: none;
  transition-property: background-color, color;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  cursor: pointer;

  & span {
    margin-left: 5px;
  }

  & svg {
    fill: #000;
    vertical-align: bottom;
    transform-origin: center;
    transform: rotate(180deg);
    border-radius: 50%;
    background-color: #ccc;
  }

  &:hover {
    color: rgba(255,255,255,0.8);
  }
`;

export default BackButton;
