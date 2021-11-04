import styled from '@emotion/styled';

export const NavList = styled.ul`
  display: flex;
  padding-top: 10px;
`;

export const NavItem = styled.li`
  padding: 10px;
  margin-right: 15px;
   list-style: none;
    font-weight: 700;
  &::after{
     content: '';
     width: 100%;
     height: 2px;
     color: #ee0606
  }
`;