import yargs from "yargs";

import publisheHandler from "./publisher";
import subscribeHandler from "./subscriber";

yargs
  .demandCommand()
  .command(
    "publish [message]",
    "Run in publisher mode",
    builder => {
      builder.positional("message", {
        describe: "Message to publish",
        type: "string",
        default: "hello world"
      });
    },
    publisheHandler
  )
  .command("subscribe", "Run in subscriber mode", () => {}, subscribeHandler)
  .help().argv;
