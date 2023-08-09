/**
 * logging helper
 */
class Logs {
  static log: Logs = null;

  static getInstance = () => {
    if (!Logs.log) {
      Logs.log = new Logs();
      delete Logs.constructor;
    }
    return Logs.log;
  };

  /**
   * logs in red
   * @param arg
   */
  red = (...arg: any) => {
    console.log('\x1b[31m', ...arg, '\x1b[39m');
  };

  /**
   * logs in green
   * @param arg
   */
  green = (...arg: any) => {
    console.log('\x1b[32m', ...arg, '\x1b[39m');
  };

  /**
   * logs in gray
   * @param arg
   */
  gray = (...arg: any) => {
    console.log('\x1b[34m', ...arg, '\x1b[39m');
  };

  /**
   * logs
   * @param arg
   */
  log = (...arg: any) => {
    console.log(...arg);
  };
}

export const log = Logs.getInstance();

// for temporary use only
export function makeid(length: number): string {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
