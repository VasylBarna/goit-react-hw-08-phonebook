import styled from '@emotion/styled';

export const NavList = styled.ul`
display: flex;
    justify-content: space-evenly;
    padding: 10px 15px;
  min-width: 40%;
  background-color: rgba(211, 255, 211, 0.809);
   list-style: none;
    font-size: 18px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-decoration: none;
    font-weight: 700;
`;

export const NavItem = styled.li`
  &::after{
     /* content: ''; */
     width: 90%;

  }
`;