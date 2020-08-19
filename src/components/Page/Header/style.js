import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  background-color: var(--primary);
  color: var(--white);
  padding: 1rem;
`;

export const HeaderLink = styled(Link)`
  font-family: 'Corben', cursive;
  font-size: 1.25rem;
  font-weight: bold;
  text-decoration: none;
`;
