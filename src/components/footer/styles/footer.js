import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 0px 60px 5px;
  background: radial-gradient(circle, #343333 0%, #1b1b1b 100%);
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
 
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Column = styled.div`
  display: flex;
  justify-self: left;
  flex-direction: column;
`;

export const Row = styled.div`
  display: grid;
  width: 90%;
  padding-bottom: 10px;
  grid-gap: 30px;
  grid-template-columns: repeat(3, minmax(230px, 1fr));
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
}
@media (max-width: 768px) {
  grid-template-columns: repeat(1, minmax(200px, 1fr));
}
`;

export const Link = styled.a`
color: #fff;
text-decoration: none;
text-align: left;
font-size: 12px;
font-family: 'Comfortaa';
&:hover {
    color: #ff9c00;
    text-shadow: 2px 2px 2px black;
    transition: 200ms ease-in;
}
@media screen and (max-width:768px) {
     
      text-align: left;
}
`;

export const Link2 = styled.a`
color: #fff;
text-decoration: none;
font-size: 12px;
padding-top:20px;
font-family: 'Comfortaa';
&:hover {
    color: #ff9c00;
    text-shadow: 2px 2px 2px black;
    transition: 200ms ease-in;
}
@media screen and (max-width:768px) {
      text-align: left;
}
`;

export const Title = styled.p`
  font-size: 15px;
  color: #fff;
  margin-bottom: 20px;
  text-shadow: 2px 2px 2px black;
  font-weight: bold;
  font-family: 'Comfortaa';
  text-align: left;
}
`;

export const Title2 = styled.p`
  Font-size: 30px;
  color: #fff;
  margin-bottom: 20px;
  text-shadow: 2px 2px 2px black;
  margin-top: 10px;
  font-weigth: bold;
  text-align: left;
  font-family: 'Comfortaa';
`