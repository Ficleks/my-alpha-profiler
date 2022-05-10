import { Input } from "./styles";

interface PropTypes {
    placeholder: string
    type: string
  }

export const CommonInput = ({ placeholder, type}: PropTypes) =>{
    return <Input placeholder={placeholder} type={type}/>
}