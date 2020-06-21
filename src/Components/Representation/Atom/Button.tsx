import React, {
  ButtonHTMLAttributes, FunctionComponent
} from 'react';

interface OwnProps {
}

type Props = OwnProps & ButtonHTMLAttributes<any>;

const Button: FunctionComponent<Props> = ({...props}) => {

  return (
    <button {...props} />
  );
};

export default Button;
