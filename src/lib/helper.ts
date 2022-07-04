class Helper {
  static delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
export default Helper;
