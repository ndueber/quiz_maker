import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveQuestion, addQuestion, deleteQuestion, editQuestion } from '../../redux/modules/quiz.js';// import action creators

const { array, func } = React.PropTypes;
const baseClass = 'Quiz';

function mapStateToProps(state) {
  const { quiz } = state;
  return {
    questions: quiz.questions,
  };
}

class Quiz extends React.Component {
  static propTypes = {
    questions: array.isRequired,
    saveQuestion: func.isRequired,
    addQuestion: func.isRequired,
    deleteQuestion: func.isRequired,
    editQuestion: func.isRequired,
  }

  constructor(props) {
    super(props);
    this.addQuestionHandler = this.addQuestionHandler.bind(this);
    this.state = { key: Math.random() };
  }

  onEditInput(index) {
    const saveButton = document.getElementById(baseClass + '__saveButton--' + index);
    saveButton.style.display = 'block';
    this.props.editQuestion(index);
    // this.setState({ key: Math.random() });
  }

  getQuestionClass(index) {
    if (this.props.questions[index].edited === true) {
      return baseClass + '__edited';
    }
    return baseClass + '__unedited';
  }

  addQuestionHandler() {
    const questionInputVal = document.getElementById(baseClass + '__question').value;
    const answerInputVal = document.getElementById(baseClass + '__answer').value;
    this.props.addQuestion(questionInputVal, answerInputVal);
    this.setState({ key: Math.random() });
  }

  saveQuestionHandler(index) {
    const questionInputVal = document.getElementById(baseClass + '__question--' + index).value;
    const answerInputVal = document.getElementById(baseClass + '__answer--' + index).value;
    this.props.saveQuestion(questionInputVal, answerInputVal, index);
    this.setState({ key: Math.random() });
  }

  deleteQuestionHandler(index) {
    this.props.deleteQuestion(index);
    this.setState({ key: Math.random() });
  }

  renderQuestions() {
    const questions = this.props.questions.map((questionObj, index) => {
      return (
        <div key={index} className={`${baseClass}__question`}>
          <div className={`${baseClass}__index`}>
            { index + 1 }.
          </div>
          <input
            id={`${baseClass}__question--${index}`}
            className={`${baseClass}__input ${this.getQuestionClass(index)}`}
            type="text"
            name="question"
            defaultValue={questionObj.question}
            onChange={this.onEditInput.bind(this, index)}
          />
          <input
            id={`${baseClass}__answer--${index}`}
            className={`${baseClass}__input ${this.getQuestionClass(index)}`}
            type="text"
            name="answer"
            defaultValue={questionObj.answer}
            onChange={this.onEditInput.bind(this, index)}
           />
          <a id={`${baseClass}__saveButton--${index}`}
            className={`button`}
            onClick={this.saveQuestionHandler.bind(this, index)}
            style={{display: 'none'}}>
            Save Question
          </a>
          <a className={`button`} onClick={this.deleteQuestionHandler.bind(this, index)}>
            Delete Question
          </a>
        </div>
      );
    });
    return questions;
  }

  renderAddQuestion() {
    return (
      <div className={`${baseClass}__addQuestion`}>
        <input id={`${baseClass}__question`} className={`${baseClass}__input`} type="text" name="question" defaultValue="Add Question Here"/>
        <input id={`${baseClass}__answer`} className={`${baseClass}__input`} type="text" name="answer" defaultValue="Add Answer Here"/>
        <a className={`button`} onClick={this.addQuestionHandler}>
          Add New Question
        </a>
      </div>
    );
  }

  render() {
    return (
      <div key={this.state.key} className={`${baseClass}`}>
        <div className={`${baseClass}__title`}>
          Quiz Creator
        </div>
        {this.renderQuestions()}
        {this.renderAddQuestion()}
      </div>
    );
  }
}


export default connect(mapStateToProps,
  (dispatch) => bindActionCreators({ saveQuestion, addQuestion, deleteQuestion, editQuestion }, dispatch)
)(Quiz);
