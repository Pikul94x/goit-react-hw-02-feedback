import React from 'react';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementStateField = stateField => {
    this.setState({ ...this.state, [stateField]: this.state[stateField] + 1 });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() > 0
      ? ((this.state.good / this.countTotalFeedback()) * 100).toFixed(1)
      : 0;
  };

  renderStatisticsSection = () => {
    if (this.countTotalFeedback() === 0) {
      return <Notification message="There is no feedback" />;
    }

    const { good, neutral, bad } = this.state;
    return (
      <Section tile="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </Section>
    );
  };

  render() {
    const options = Object.keys(this.state);
    return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.incrementStateField}
          />
        </Section>
        {this.renderStatisticsSection()}
      </div>
    );
  }
}
