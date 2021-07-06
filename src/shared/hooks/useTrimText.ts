import {useCallback, useEffect, useState} from 'react';

const MAX_TEXT_SIZE = 250;

const useTrimText = (text: string) => {
  // ****** DATA START ******
  const shouldTrimText = text.length > MAX_TEXT_SIZE;

  const [trimmedText, setTrimmedText] = useState(text);
  const [isTextTrimmed, setIsTextTrimmed] = useState(shouldTrimText);
  // ****** DATA END ******

  // ****** CALLBACKS START ******
  const trimText = useCallback(() => {
    const updatedString = text.substring(0, MAX_TEXT_SIZE);
    setTrimmedText(updatedString);
    setIsTextTrimmed(true);
  }, [text]);

  const handleToddleCropText = useCallback(() => {
    setIsTextTrimmed(prevState => !prevState);
    if (isTextTrimmed) {
      setTrimmedText(text);
    }
  }, [isTextTrimmed, text]);
  // ****** CALLBACKS END ******

  // ****** EFFECTS START ******
  useEffect(() => {
    if (isTextTrimmed) {
      trimText();
    }
  }, [isTextTrimmed, trimText]);
  // ****** EFFECTS END ******

  return {
    isTextTrimmed,
    shouldTrimText,
    trimmedText,
    handleToddleCropText,
  };
};

export default useTrimText;
