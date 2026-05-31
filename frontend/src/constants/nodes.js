export const NODE_DEFAULT_WIDTH = 180;
export const NODE_DEFAULT_HEIGHT = 120;
export const NODE_MIN_WIDTH = 140;
export const NODE_MIN_HEIGHT = 80;

export const getDefaultNodeStyle = (type) => {
  switch (type) {
    case 'note':
      return { width: 200, height: 160 };
    case 'llm':
      return { width: 180, height: 90 };
    default:
      return { width: NODE_DEFAULT_WIDTH, height: NODE_DEFAULT_HEIGHT };
  }
};
