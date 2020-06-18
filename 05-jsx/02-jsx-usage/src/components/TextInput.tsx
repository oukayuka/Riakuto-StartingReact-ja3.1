import React from 'react';

const TextInput: React.FunctionComponent = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleClick = (): void => {
    console.log(inputRef.current);
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <input type="button" value="Focus" onClick={handleClick}/>
    </div>
  );
};

export default TextInput;
