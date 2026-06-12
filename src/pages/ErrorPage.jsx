import copy from "../utils/copy.json";

const ErrorPage = ({ errorType = "api" }) => {
  const message =
    errorType === "user" ? copy.ErrorMessageUser : copy.ErrorMessageApi;

  return (
    <div className="error">
      <h1 className="error__title">
        {copy.oups}
        <span className="error__title--span">{copy.error}</span>
      </h1>
      <p className="error__message">{message}</p>
    </div>
  );
};

export default ErrorPage;
