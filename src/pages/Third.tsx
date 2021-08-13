import { useStartView } from "../hooks";

export function Third() {
  useStartView("third");
  return <h1>Third page</h1>;
}
