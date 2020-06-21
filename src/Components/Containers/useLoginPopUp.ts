import {AuthenticationWithGoogle} from '../../Core/ApplicationService/Auth/AuthenticationWithGoogle';

export const useLoginPopUp = () => {
  const AuthService = new AuthenticationWithGoogle();

  return [AuthService];
}