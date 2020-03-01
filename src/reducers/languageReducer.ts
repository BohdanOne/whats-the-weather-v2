export default (language: string, action: { type: string; payload: string }): string => {
  switch (action.type) {
    case 'CHANGE_LANGUAGE':
      return language = action.payload;
    default:
      return language;
  }
}