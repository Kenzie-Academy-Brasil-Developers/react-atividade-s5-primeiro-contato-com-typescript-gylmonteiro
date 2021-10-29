import styled from "styled-components";

export const ContainerForm = styled.div`
  background-color: papayawhip;
  height: 200px;
  width: 720px;
  border-radius: 50px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ConatinerInput = styled.div`
  width: 720px;
  margin-bottom: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  color: black;

  label {
    width: 30px;
    margin-left: 10px;
  }

  input {
    width: 180px;
    border-radius: 10px;
    border: none;
    padding: 5px;
  }
`;

export const Button = styled.button`
  padding: 15px;
  background-color: paleturquoise;
  border: none;
  border-radius: 10px;
  width: 150px;
  margin-top: 15px;
`;

export const ContainerCards = styled.div`
  background-color: palevioletred;
  max-width: 720px;
  border-radius: 50px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  ul {
    width: 250px;
    border-radius: 50px;
    background-color: papayawhip;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
  }

  li {
    list-style: none;
    background-color: orange;
    margin: 0;
    padding: 5px;
    border-radius: 50px;
    color: black;
    margin: 3px;
  }

  h3 {
    font-size: 12px;
  }
`;
