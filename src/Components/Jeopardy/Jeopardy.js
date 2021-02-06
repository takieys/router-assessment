import React, { Component } from "react";
//import our service
import JeopardyService from "../../jeopardyService";
class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0,
      userAnswer: "",
    };
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then((result) => {
      this.setState({
        data: result.data[0],
      });
    });
  }

  handleChange = (event) => {
    this.setState({
      userAnswer: event.target.value,
    });
  };

  handleAnswer = (score) => {
    if (this.state.userAnswer === this.state.data.answer) {
      this.setState((state) => ({
        score: (state.score += this.state.data.value),
        userAnswer: "",
      }));
    } else {
      this.setState((state) => ({
        score: (state.score -= this.state.data.value),
        userAnswer: "",
      }));
    }
    this.getNewQuestion();
  };

  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }
  //display the results on the screen
  render() {
    console.log(this.state.data);
    let category = this.state.data.category && this.state.data.category.title;
    return (
      <div>
        <div>Question:</div>

        <p>{this.state.data.question}?</p>
        <div>Category:</div>
        <p>{category}</p>
        <div>Point Value:</div>
        <p>{this.state.data.value}</p>
        <div>Score:</div>
        <p>{this.state.score}</p>

        <label>Answer:</label>
        <input
          type="text"
          name="userAnswer"
          value={this.state.userAnswer}
          onChange={this.handleChange}
        />

        <button onClick={this.handleAnswer}>Guess!</button>
      </div>
    );
  }
}
export default Jeopardy;
