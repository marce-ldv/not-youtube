import {AuthenticationServices} from '../../Core/ApplicationService/AuthenticationServices';
import {useState}               from 'react';
import {auth}                   from 'firebase';

export const useAuthServicesPopUp = (): [() => Promise<void>, auth.UserCredential | null] => {
  const authService = AuthenticationServices.getInstance();
  const [userData, setUserData] = useState<auth.UserCredential | null>(null);

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
