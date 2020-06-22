import firebase, {auth} from 'firebase';

export class AuthenticationServices {
  private _provider: auth.AuthProvider;

  constructor() {
    this._provider = new firebase.auth.GoogleAuthProvider();
  }

  public async signWithPopUp(): Promise<auth.UserCredential> {
    const {_provider} = this;
    return await firebase.auth().signInWithPopup(_provider);
  }
}