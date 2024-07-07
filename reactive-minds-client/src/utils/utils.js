export const sentenceCase = (string) => {
  return (
    string.toLowerCase().charAt(0).toUpperCase() + string.toLowerCase().slice(1)
  );
};

export const normalize = (string) => {
  return string.toLowerCase();
};
