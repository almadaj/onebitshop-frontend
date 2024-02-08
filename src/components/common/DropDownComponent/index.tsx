import React, { SetStateAction } from "react";
import { ArrowIcon, DropDown, DropDownContainer } from "./styles";

const Data = [
  { value: "Teste 1" },
  { value: "Teste 2" },
  { value: "Teste 3" },
  { value: "Teste 4" },
];

interface DropDownProps {
  data: Object[];
  placeholder: string;
  setSelected: React.Dispatch<SetStateAction<string>>;
}

const arrow = require("../../../../assets/icons/arrow-down.png");

const DropDownComponent = ({
  data,
  placeholder,
  setSelected,
}: DropDownProps) => {
  const noAddress = [{ value: "Sem endereços no momento!", disabled: true }];
  const checkedData = data?.length <= 0 ? noAddress : data;
  return (
    <>
      <DropDownContainer>
        <DropDown
          setSelected={setSelected}
          data={checkedData}
          placeholder={placeholder}
          save="value"
          search={false}
          arrowicon={<ArrowIcon source={arrow} />}
        />
      </DropDownContainer>
    </>
  );
};

export default DropDownComponent;
