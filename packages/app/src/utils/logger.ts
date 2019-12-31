// import debug from "debug";

export default class Logger {
  private static instance: Logger;

  constructor() {
    // this.app = debug("nd-app");
  }

  static Root(): Logger {
    if (!Logger.instance) Logger.instance = new Logger();

    return Logger.instance;
  }
}
