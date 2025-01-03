const requestError = (
  message?: string,
  defaultMessage = "Sorry, an error occurred."
) => {
  return alert(message ?? defaultMessage);
};

export default requestError;
