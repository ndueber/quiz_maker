import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveChanges, addQuestion, deleteQuestion } from '../../redux/modules/quizData.js';// import action creators

const { func } = React.PropTypes;
const baseClass = 'Quiz';
const BOARD_SIZE = 10;

function mapStateToProps(state) {
  const { quiz } = state;
  return {
    questions: quiz.questions,
  };
}

class Quiz extends React.Component {
  static propTypes = {
    saveChanges: func.isRequired,
    addQuestion: func.isRequired,
    deleteQuestion: func.isRequired,
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`${baseClass}`}>
        Hello World
      </div>
    );
  }
}


export default connect(mapStateToProps,
  (dispatch) => bindActionCreators({ saveChanges, addQuestion, deleteQuestion }, dispatch)
)(Quiz);

//  (dispatch) => bindActionCreators({ saveChanges, addQuestion, deleteQuestion }, dispatch)
