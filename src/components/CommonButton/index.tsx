import { Button } from "./styles";
import { MouseEventHandler } from "react";

interface PropTypes {
    label: string
    onClick: MouseEventHandler<HTMLButtonElement>
  }

export const CommonButton = ({ onClick, label}: PropTypes) =>{
    return <Button onClick={onClick}>{label}</Button>
}