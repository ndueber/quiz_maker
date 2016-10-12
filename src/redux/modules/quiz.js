// actions type constants
const SAVE_CHANGES = 'SAVE_CHANGES';
const ADD_QUESTION = 'ADD_QUESTION';
const DELETE_QUESTION = 'DELETE_QUESTION';
const EDIT_QUESTION = 'EDIT_QUESTION';

const initialState = {
  questions: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_CHANGES:
      const questionObj = {'question': action.question, 'answer': action.answer, 'editting': false};
      let questions = JSON.parse(JSON.stringify(state.questions));
      questions[action.questionId] = questionObj;
      return {
        ...state,
        questions
      };
    case ADD_QUESTION:
      const question = {'question': action.question, 'answer': action.answer, 'editting': false};
      let questions = JSON.parse(JSON.stringify(state.questions));
      questions.push(question);
      return {
        ...state,
        questions
      };
    case DELETE_QUESTION:
      let questions = JSON.parse(JSON.stringify(state.questions));
      questions.splice(action.questionId, 1);
      return {
        ...state,
        questions
      };
    case EDIT_QUESTION:
      let questions = JSON.parse(JSON.stringify(state.questions));
      questions[action.questionId].editting = true;
      questions[action.questionId].edittedQuestion = action.edittedQuestion;
      questions[action.questionId].edittedAnswer = action.edittedAnswer;
      return {
        ...state,
        questions
      };
    default:
      return state;
  }
}


/* *********** Helper Functions ************/

/* *********** Action creators ************/

/**
 * Called on input change
 */
export function saveQuestion(question, answer, questionId) {
  // add call to server here
  return {
    type: SAVE_CHANGES,
    question: question,
    answer: answer,
    questionId: questionId
  };
}

export function editQuestion(edittedQuestion, edittedAnswer, questionId) {
  return {
    type: EDIT_QUESTION,
    edittedQuestion: edittedQuestion,
    edittedAnswer: edittedAnswer,
    questionId: questionId
  };
}

export function addQuestion(question, answer) {
  // add call to server here
  return {
    type: ADD_QUESTION,
    question: question,
    answer: answer,
  };
}

export function deleteQuestion(questionId) {
  // add call to server here
  return {
    type: DELETE_QUESTION,
    questionId: questionId,
  };
}
