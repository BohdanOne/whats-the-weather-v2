type State = {
  location: string;
};

type Action = {
  type: 'SET_LOCATION';
  payload: string;
};

export default (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_LOCATION':
      return { ...state, location: action.payload };
    default:
      return state;
  }
};
