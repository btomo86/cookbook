import styled from "styled-components";

export const StyledInput = styled.input`
  border-radius: 5px;
  height: 40px;
  width: 300px;
`;

export const StyledLabel = styled.label`
  padding-bottom: 5px;
  display: flex;
  flex-direction: column;
  height: 75px;
  justify-content: space-between;
  font-size: 20px;
  color: #fff;
`;

export const MainLoginArea = styled.div`
  display: flex;
  width: 60%;
  height: 700px;
  background: yellow;
`;

export const StyledForm = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
  background: #f96716;
  color: white;
  align-items: center;
  justify-content: space-evenly;

  h1 {
    color: #fff;
  }
  p {
    color: #fff;
    font-size: 20px;
    font-weight: bold;
  }
`;

export const StyledButton = styled.button`
  width: 305px;
  padding: 10px;
  cursor: pointer;
  font-size: 20px;
  transition: all 0.5s ease;
  &:hover {
    background: #23d997;
    color: #fff;
  }
`;

export const StyledImageSection = styled.img`
  height: 100%;
  width: auto;
  overflow: hidden;
`;

export const StyledSelect = styled.select`
  padding-bottom: 10px;
  margin: 5px;
  border-radius: 6px;
`;

export const StyledAlert = styled.div`
  font-size: 20px;
  color: darkblue;
`;