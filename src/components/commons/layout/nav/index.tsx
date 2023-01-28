import styled from "@emotion/styled";

const NavWrap = styled.section`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  position: relative;
`;

const NavList = styled.ul`
  width: 900px;
  display: flex;
  justify-content: space-between;
  color: #fff;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  li {
    cursor: pointer;
    font-size: 22px;
  }
`;

export default function LayoutNav() {
  return (
    <NavWrap>
      <NavList>
        <li>BRAND</li>
        <li>CATEGORY</li>
        <li>LIFE</li>
        <li>BEAUTY</li>
        <li>|</li>
        <li>#STYLE</li>
        <li>EVENT</li>
      </NavList>
    </NavWrap>
  );
}
