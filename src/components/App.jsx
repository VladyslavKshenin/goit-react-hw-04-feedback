import {Statistics} from "./Statistics/Statistics";
import {FeedbackOptions} from './FeedbackOption/FeedbackOption'
import { Component } from "react";
import {Section} from "./Section/Section";
import {Notification} from "./Notification/Notification";
import {GlobalStyles} from "./style/globalStyle"


export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    heandlerClick = (e) => {
        const buttonName = e.target.name; 
        this.setState(prev => ({
            [buttonName]: prev[buttonName] + 1
        }))
  }

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    }

    countPositiveFeedbackPercentage = () => {
        return this.state.good > 0 ? Math.round((this.state.good * 100) / this.countTotalFeedback()) : 0;
    }

    render() {
        const total = this.countTotalFeedback(); 
        return (
            <>
  
                <GlobalStyles/>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options = {Object.keys(this.state)}
                        onLeaveFeedback={this.heandlerClick}
                    />
                </Section>

                <Section title="Statistics">
                    {total === 0 ?
                        (<Notification
                            message="There is no feedback"
                        />)
                        :
                        (<Statistics
                            good={this.state.good}
                            neutral={this.state.neutral}
                            bad={this.state.bad}
                            total={this.countTotalFeedback()}
                            positivePercentage={this.countPositiveFeedbackPercentage()}
                        />)
                    }
                    
                </Section>
                                       
            </>
        )
    }   
}