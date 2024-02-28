import React, { useState } from "react";
import { DescriptionTxt, ReadMoreLess } from "./styles";

interface Props {
  desc: string;
}

const DescriptionComponent = ({ desc }: Props) => {
  const [readMoreText, setReadMoreText] = useState("Ler Mais");
  const [numberOfLines, setNumberOfLines] = useState(3);

  const handleReadMore = (numberLines: number) => {
    if (numberLines != 3) {
      setNumberOfLines(3);
      setReadMoreText("Ler Mais");
    } else {
      setNumberOfLines(100);
      setReadMoreText("Ler Menos");
    }
  };
  return (
    <>
      <DescriptionTxt numberOfLines={numberOfLines}>{desc}</DescriptionTxt>
      {desc.length >= 115 ? (
        <ReadMoreLess
          onPress={() => {
            handleReadMore(numberOfLines);
          }}
        >
          {readMoreText}
        </ReadMoreLess>
      ) : null}
    </>
  );
};

export default DescriptionComponent;
