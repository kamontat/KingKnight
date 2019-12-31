import winston from "winston";

export default class {
  private instance: winston.Logger;

  constructor(opts: winston.LoggerOptions = {}) {
    const options = {
      level: "debug",
      defaultMeta: {
        name: "king-knight",
      },
      transports: [
        new winston.transports.File({ filename: "error.log", level: "error" }),
        new winston.transports.File({ filename: "combined.log" }),
      ],
      ...opts,
    } as winston.LoggerOptions;

    this.instance = winston.createLogger(options);
  }

  info(): void {
    this.instance.log("info", "create new info log", { data: "hello, world" });
  }
}
