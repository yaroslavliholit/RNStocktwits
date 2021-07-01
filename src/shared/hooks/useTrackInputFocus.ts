import {useCallback, useState} from 'react';

const useTrackInputFocus = () => {
  const [isInputInFocus, setIsInputInFocus] = useState(false);

  const handleFocus = useCallback(() => {
    setIsInputInFocus(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsInputInFocus(false);
  }, []);

  const getTrackInputFocusProps = useCallback(
    () => ({
      onFocus: handleFocus,
      onBlur: handleBlur,
    }),
    [handleBlur, handleFocus],
  );

  return {
    isFocus: isInputInFocus,
    getTrackInputFocusProps,
  };
};

export default useTrackInputFocus;
