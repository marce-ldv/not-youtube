import {AuthenticationServices} from '../../Core/ApplicationService/AuthenticationServices';
import {useState}               from 'react';
import UserCredential = firebase.auth.UserCredential;

export const useAuthServicesPopUp = () => {
  const authService = new AuthenticationServices();
  const [userData, setUserData] = useState<UserCredential>();

  const handleClick = async () => {
    try {
      const response = await authService.signWithPopUp();
      setUserData(response)
      console.log('response', response)
      console.log(`${response.user?.displayName} ha inciado sesion`)
    } catch (err) {
      console.log(`Error ${err.code}: ${err.message}`)
    }
  };

  return [handleClick, userData];
}
