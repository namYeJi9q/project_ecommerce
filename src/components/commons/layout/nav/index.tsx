import styled from "@emotion/styled";

const NavWrap = styled.section`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;

const NavList = styled.ul`
  width: 900px;
  display: flex;
  justify-content: space-between;
  color: #fff;
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
