/**
 *
 *
 * @export
 * @param {string} stringToLog
 */
export function sharedLogger(stringToLog: string): void {
  console.log(stringToLog);
}

/**
 *
 *
 * @export
 * @return {*}
 */
export function notUsedYet(): boolean {
  return justReturnsFalse();
}

/**
 *
 *
 * @export
 * @return {*}  {boolean}
 */
export function returnsTrue(): boolean {
  return true;
}

/**
 *
 *
 * @return {*}  {boolean}
 */
function justReturnsFalse(): boolean {
  return false;
}
