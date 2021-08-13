import React from "react";
import { datadogRum } from "@datadog/browser-rum";

export function useStartView(name: string) {
  React.useEffect(() => {
    console.log("Starting", name);
    datadogRum.startView(name);
  }, []);
}
