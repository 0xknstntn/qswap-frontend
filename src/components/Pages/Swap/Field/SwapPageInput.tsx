import styled from "styled-components";
import { useToggleTheme } from "../../../../hooks/useToggleTheme";
import { useAmountIn } from "../../../../hooks/useAmountInStore";
import { FormEvent } from "react";

const Input = styled.input <{TextColor: string}>`
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 20px;
    background: transparent;
    color: ${props => props.TextColor};
    font-size: 30px;
    padding-left: 30px;
    font-weight: 700;
`


export const SwapPageInput = () => {

    const [theme, setTheme] = useToggleTheme();
    const [amtIn, setAmtIn] = useAmountIn()

    const HandleInputAmpunt = (e: FormEvent<HTMLInputElement>) => {
        if (e.currentTarget.value == undefined) {
            setAmtIn(
                {
                    amt: "",
                    base: amtIn.base,
                    logo: amtIn.logo,
                    denom: amtIn.denom,
                }
            );
        } else {
            setAmtIn(
                {
                    amt: e.currentTarget.value,
                    base: amtIn.base,
                    logo: amtIn.logo,
                    denom: amtIn.denom,
                }
            );
        }
    };

    return(
        <Input TextColor={theme.TextColor} placeholder="0" onChange={HandleInputAmpunt} value={amtIn.amt}></Input>
    )
}