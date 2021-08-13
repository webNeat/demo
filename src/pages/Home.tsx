import { useStartView } from "../hooks";

export function Home() {
  useStartView("home");
  return <h1>Home page</h1>;
}
