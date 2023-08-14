import PropTypes from 'prop-types';
import { Container } from './Section.styled';

const Section = ({ children }) => <Container>{children}</Container>;

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
