import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oops!!</h1>
      <h3>Something went wrong!!</h3>
      <div>{err.status}</div>
    </div>
  );
};

export default Error;
