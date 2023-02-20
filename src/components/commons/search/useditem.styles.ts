import styled from "@emotion/styled";

export const SearchWrap = styled.span`
  position: relative;
  width: 534px;
  height: 45px;
  border-bottom: 3px solid #000;
  cursor: pointer;
`;

export const SearchBox = styled.input`
  background-color: rgba(0, 0, 0, 0);

  width: 100%;
  height: 100%;
  font-size: 15px;
  cursor: pointer;
`;

export const SearchIcon = styled.img`
  position: absolute;
  top: 0px;
  right: 14px;
  z-index: 1;
`;
