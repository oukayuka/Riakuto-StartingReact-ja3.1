import { VFC, SyntheticEvent, useEffect, useRef } from 'react';

const TextInput: VFC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleClick = (e: SyntheticEvent): void => {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    if (inputRef.current) alert(inputRef.current.value);
  };
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick} type="button">
        Click
      </button>
    </>
  );
};

export default TextInput;
