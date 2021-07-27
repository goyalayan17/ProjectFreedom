
import { css } from "@emotion/core";
import { Grid, TextField } from "@material-ui/core";
import React from "react";


const inputCss = css`
    background-color: grey;
`;

export const Input = () => {
    const [firstName, setFirstName]= React.useState<string>('');
    const onChangeHandler =(event: React.ChangeEvent<HTMLInputElement>)=>{
        setFirstName(event.target.value);
    };
    return (
        <React.Fragment>
            <Grid container direction="column">
                <Grid item>
                    <span> Input</span>
                </Grid>
                <Grid item>
                    <TextField css={inputCss} onChange={onChangeHandler} value={firstName} type="text" />
                </Grid>
            </Grid>
        </React.Fragment>
    );
};