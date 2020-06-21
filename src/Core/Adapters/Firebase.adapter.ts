import React from 'react'
import { auth } from 'firebase';

export const useFirebaseAuthentication = () => {

  return [auth];
}