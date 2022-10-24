import React from 'react';
import PropTypes from 'prop-types';

class FeedbackOptions extends React.Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div style={{ display: 'flex' }}>
        <button
          style={{ margin: 10 }}
          onClick={() => onLeaveFeedback(options[0])}
        >
          Good
        </button>
        <button
          style={{ margin: 10 }}
          onClick={() => onLeaveFeedback(options[1])}
        >
          Neutral
        </button>
        <button
          style={{ margin: 10 }}
          onClick={() => onLeaveFeedback(options[2])}
        >
          Bad
        </button>
      </div>
    );
  }
}

FeedbackOptions.prototypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
