import firebase, {auth} from 'firebase';

export class AuthenticationServices {
  private _provider: auth.AuthProvider;
  private static instance: AuthenticationServices;

  private constructor() {
    this._provider = new firebase.auth.GoogleAuthProvider();
  }

  public static getInstance(): AuthenticationServices {
    if (this.instance === null) this.instance = new AuthenticationServices();
    return this.instance;
  }

  public async signWithPopUp(): Promise<auth.UserCredential> {
    const {_provider} = this;
    return await firebase.auth().signInWithPopup(_provider);
  }
}