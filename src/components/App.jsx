import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from './FeedbackOption/FeedbackOption';
import { useState } from "react";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";
import { GlobalStyles } from "./style/globalStyle";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ['good', 'neutral', 'bad'];

  const handleButtonClick = ({ target: { name } }) => {
    switch (name) {
      case 'good':
        setGood((prev) => prev + 1);
        break;
      case 'neutral':
        setNeutral((prev) => prev + 1);
        break;
      default:
        setBad((prev) => prev + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return good > 0 ? Math.round((good * 100) / countTotalFeedback()) : 0;
  };

  const renderStatistics = () => {
    return total === 0 ? (
      <Notification message="There is no feedback" />
    ) : (
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
    );
  };

  const total = countTotalFeedback();

  return (
    <>
      <GlobalStyles />
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleButtonClick}
        />
      </Section>

      <Section title="Statistics">{renderStatistics()}</Section>
    </>
  );
};
