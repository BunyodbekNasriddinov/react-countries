import LoadingAnimation from "../../assets/images/loading.gif";

export const Loading = () => {
  return (
    <img
      className="loading m-auto"
      src={LoadingAnimation}
      width="200"
      height="200"
      alt="Loading animation"
    />
  );
};
