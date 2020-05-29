/**
 * Provides some utility functions.
 */
export class Utils {
  /**
   * Gets the current date formatted as yyyy-mm-dd.
   *
   * @returns date in fomat yyyy-mm-dd.
   */
  public static getCurrDate(): string {
    const today = new Date();
    const yyyy = today.getFullYear();
    let dd = '' + today.getDate();
    let mm = '' + (today.getMonth() + 1);
    if (+dd < 10) {
      dd = '0' + dd;
    }
    if (+mm < 10) {
      mm = '0' + mm;
    }
    return `${yyyy}-${mm}-${dd}`;
  }
}
