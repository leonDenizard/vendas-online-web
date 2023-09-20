import { Input as InputAntd, InputProps as InputPropsAntd } from "antd";

import { ContainerInput, TitleInput } from "./input.styles";

interface InputProps extends InputPropsAntd {
  title?: string;
}

const Input = ({ title, ...props }: InputProps) => {
  return (
    <ContainerInput>
      {title && <TitleInput>{title}</TitleInput>}
      <InputAntd {...props} />
    </ContainerInput>
  );
};

export default Input;
