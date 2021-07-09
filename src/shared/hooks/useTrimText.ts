import {useCallback, useEffect, useState} from 'react';

const MAX_TEXT_SIZE = 250;
const TRIMMED_NUMBER_OF_LINES = 3;

const useTrimText = (text: string) => {
  // ****** DATA START ******
  const shouldTrimText = text.length > MAX_TEXT_SIZE;

  const [numberOfLines, setNumberOfLines] = useState<Nullable<number>>(null);
  const [isTextTrimmed, setIsTextTrimmed] = useState(shouldTrimText);
  // ****** DATA END ******

  // ****** CALLBACKS START ******
  const trimText = useCallback(() => {
    setNumberOfLines(TRIMMED_NUMBER_OF_LINES);
    setIsTextTrimmed(true);
  }, []);

  const handleToddleCropText = useCallback(() => {
    setIsTextTrimmed(prevState => !prevState);
    if (isTextTrimmed) {
      setNumberOfLines(null);
    }
  }, [isTextTrimmed]);

  const getNumberOfLineProp = useCallback(() => {
    return numberOfLines ? {numberOfLines} : {};
  }, [numberOfLines]);
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
    getNumberOfLineProp,
    handleToddleCropText,
  };
};

export default useTrimText;
