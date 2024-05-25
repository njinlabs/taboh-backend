import express, { Express } from "express";
import AppFunction from "../../types/app";
import routes from "../../config/routes";

function server(): AppFunction<(port: number, callback?: () => void) => void> {
  let booted: boolean = false;
  let server: Express | undefined = undefined;

  function boot() {
    if (booted) return;
    server = express();

    routes.forEach((item) => {
      item(server!);
    });
  }

  return {
    boot,
    value: () => (port, callback) => {
      server!.listen(port, callback);
    },
  };
}

export default server();
