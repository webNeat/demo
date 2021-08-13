import { useStartView } from "../hooks";

export function Second() {
  useStartView("second");
  return <h1>Second page</h1>;
}
