export default interface ILogin {
  login(email: string, password: string): Promise<string>;
}
