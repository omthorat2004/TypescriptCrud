import React from 'react';

type Props = Record<string,string>

const Button:React.FC<Props> = ({one,two,three}) => {
   
  return (
    <div>
      {one}
      {two}
    </div>
  );
}

export default Button;
