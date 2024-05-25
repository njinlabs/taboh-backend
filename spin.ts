import "dotenv/config";
import { logger, server } from "./app";
import { boot } from "./app/boot";

boot();
server()(Number(process.env.PORT), () => {
  logger().info("Running on port " + process.env.PORT);
});
