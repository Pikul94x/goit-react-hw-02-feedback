import React from 'react';
import PropTypes from 'prop-types';

class Section extends React.Component {
  render() {
    const { title, children } = this.props;
    return (
      <>
        <h3>{title}</h3>
        {children}
      </>
    );
  }
}

Section.prototypes = {
  title: PropTypes.string,
  onLeaveFeedback: PropTypes.element,
};


export default Section;
