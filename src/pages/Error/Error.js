import ErrorImg from "../../assets/images/error-not-found.svg";

export const Error = () => {
  return (
    <>
      <img
        className="img-fluid mx-auto error-not-found"
        src={ErrorImg}
        width="700"
        height="700"
        alt="Not found img"
      />
    </>
  );
};
