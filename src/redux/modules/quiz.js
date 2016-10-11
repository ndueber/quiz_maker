// actions type constants
const SAVE_CHANGES = 'SAVE_CHANGES';
const ADD_QUESTION = 'ADD_QUESTION';
const DELETE_QUESTION = 'DELETE_QUESTION';

// function variable constants
const BOARD_SIZE = 10;
const LEFT = 'left';
const RIGHT = 'right';
const UP = 'up';
const DOWN = 'down';
const DIRECTIONS_TO_PLACE_BOATS = [LEFT, RIGHT, UP, DOWN];

const initialState = {
  questions: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_CHANGES:
      return {
        ...state,
      };
    case ADD_QUESTION:
      return {
        ...state,
      };
    case DELETE_QUESTION:
      return {
        ...state,
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
export function saveChanges(questions) {
  // add call to server here
  return {
    type: SAVE_CHANGES,
    questions: questions
  };
}

export function addQuestion(question) {
  // add call to server here
  return {
    type: ADD_QUESTION,
    question: question
  };
}

export function deleteQuestion(questionId) {
  // let shipsOnBoard = JSON.parse(JSON.stringify(ships));
  // add call to server here
  return {
    type: DELETE_QUESTION,
    questionId: questionId,
  };
}
