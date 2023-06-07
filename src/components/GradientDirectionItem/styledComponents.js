// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  width: 49%;
  list-style-type: none;
  @media screen and (min-width: 768px) {
    width: 24%;
  }
`
export const DirectionButton = styled.button`
  text-align: center;
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  background-color: #ffffff;
  font-family: 'roboto';
  font-size: 20px;
  font-weight: 600;
  width: 120px;
  border-radius: 10px;
  border: none;
  height: 60px;
  margin-bottom: 10px;
  outline: none;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  cursor: pointer;
`
