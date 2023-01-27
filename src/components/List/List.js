import { Card } from "../Card";
import { Loading } from "../Loading";
export const List = ({ countries }) => {
  return (
    <>
      {countries.data.length ? (
        <ul className="row my-5 gy-4 list-unstyled">
          {countries.data.map((item) => (
            <Card key={item.name.common} obj={item} />
          ))}
        </ul>
      ) : (
        ""
      )}
      {countries.isError ? (
        <h2 className="h2 display-1 text-center mt-5 text-warning">
          {countries.isError}
        </h2>
      ) : (
        ""
      )}
      {countries.isLoading ? <Loading /> : ""}
    </>
  );
};
