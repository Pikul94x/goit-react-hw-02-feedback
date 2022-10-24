import React from 'react';

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

export default FeedbackOptions;
