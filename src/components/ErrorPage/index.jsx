import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oh  rayos!</h1>
      <p>Sorry, error has occurred, but we got it!!.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}