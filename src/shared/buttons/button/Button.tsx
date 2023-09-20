import { ButtonProps } from "antd";

import { ButtonAntd } from "./button.styles";

const Button = ({ ...props }: ButtonProps) => {
  return <ButtonAntd type="primary" {...props} />;
};

export default Button;
