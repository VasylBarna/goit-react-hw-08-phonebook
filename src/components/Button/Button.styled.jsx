import styled from '@emotion/styled';

export const ButtonPhonebook = styled.button`
  margin-left: auto;
  margin-right: auto; 
  padding: 10px 20px;
  outline: none;
  border: 1px solid rgba(244, 247, 62, 0.809);
  background-color: #31708f;
  color: white;
  cursor: pointer;
  font-size: small;
  border-radius: 15px;
  box-shadow: 0 9px #999;
  &:hover {
    background-color: rgba(5, 104, 253, 0.85);
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
  &.btn:active {
    background-color: rgba(5, 104, 253, 0.85);
    box-shadow: 0 3px #666;
    transform: translateY(3px);
}
`;