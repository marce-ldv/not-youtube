import AuthProvider = firebase.auth.AuthProvider;
import firebase from 'firebase';
import UserCredential = firebase.auth.UserCredential;

export class AuthenticationServices {
  private _provider: AuthProvider;

  constructor() {
    this._provider = new firebase.auth.GoogleAuthProvider();
  }

  public async signWithPopUp(): Promise<UserCredential> {
    const {_provider} = this;
    return await firebase.auth().signInWithPopup(_provider);
  }
}