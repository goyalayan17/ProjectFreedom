import {
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Select,
  MenuItem,
  FormControlLabel,
  Button,
  TableContainer,
  Paper,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  Dialog,
  DialogActions,
  DialogTitle,
} from "@material-ui/core";
import * as React from "react";
import { Alert, AlertTitle } from "@material-ui/lab";
import { IRegistrationForm } from '../interfaces';
import { flexCss, formMarginCss, headerCss, paddingcss } from './Styles.RegistrationForm';

export interface IRegistrationProps {
  onChange: (name: string, value: string | number)=> void;
  registrationList: IRegistrationForm[];
  registrationForm: IRegistrationForm;
}

export const Registration: React.FC<IRegistrationProps> =({
  onChange, 
  registrationList,
  registrationForm
}: IRegistrationProps) => {
  const formDetails = {
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "female",
    class: "0",
  };
  const [formData, setFormDetails] = React.useState(formDetails);
  const [arrayData, setArrayData] = React.useState<IRegistrationForm[]>([]);
  const currentindex = React.useRef<number | undefined>(undefined);
  const [openDialoge, setOpenDialoge] = React.useState(false);
  const [formValid, setFormValid] = React.useState<boolean>(true);
  const {firstName, lastName, middleName, gender } = registrationForm;
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = event.target.value;

    const name: string = event.target.name;
    onChange(name, value);
    //setFormDetails({ ...formData, [name]: value });
  };
  const onSubmitHandler = (event: any) => {
    if (
      formData.firstName &&
      formData.lastName &&
      formData.middleName &&
      formData.class !== "0"
    ) {
      setArrayData([...arrayData, formData]);
      setFormDetails(formDetails);
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };
  const onUpdatehandler = (event: any) => {
    setOpenDialoge(true);
  };
  const agreedUpdate = (event: any) => {
    const a: IRegistrationForm[] = [...arrayData];
    a.splice(currentindex.current!, 1, formData);
    currentindex.current = undefined;
    setArrayData(a);
    setOpenDialoge(false);
    setFormDetails(formDetails);
  };

  const handleClose = () => {
    setOpenDialoge(false);
  };

  const onCancleHandler = () => {
    currentindex.current = undefined;
    setFormDetails(formDetails);
  };

  const onEditHandler = (index: number) => (event: any) => {
    const a: IRegistrationForm = { ...arrayData[index] };
    currentindex.current = index;
    setFormDetails(a);
  };

  const onDeleteButtonClick = (index: number) => (event: any) => {
    const a: IRegistrationForm[] = [...arrayData];
    a.splice(index, 1);
    setArrayData(a);
  };
  return (
    <div>
      <Grid css={headerCss} container justifyContent="center" direction="row" item>
        <h1>STUDENT MANAGEMENT SYSTEM</h1>
      </Grid>
      {!formValid && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          This is an error alert — <strong>check it out!</strong>
        </Alert>
      )}
      <Grid container>
        <Grid xs={5} item></Grid>
        <Grid xs={2}   item>
          <form method="post" css={formMarginCss}>
            <div>
              <TextField
                {...(!formData.firstName && !formValid && { error: true })}
                onChange={onChangeHandler}
                name="firstName"
                value={firstName }
                label="First Name"                
              />
              <TextField
                {...(!formData.middleName && !formValid && { error: true })}
                onChange={onChangeHandler}
                name="middleName"
                value={formData.middleName}
                label="Middle Name"
              />
              <TextField
                {...(!formData.lastName && !formValid && { error: true })}
                onChange={onChangeHandler}
                name="lastName"
                value={formData.lastName}
                label="Last Name"
              />
              <Grid container direction="row" spacing={2} alignItems="center">
                <Grid xs={3} item>
                  <label>Class</label>
                </Grid>
                <Grid xs={9} item>
                  <Select
                    {...(formData.class === "0" &&
                      !formValid && { error: true })}
                    label="Class"
                    onChange={onChangeHandler}
                    name="class"
                    value={formData.class}
                    css={flexCss}
                  >
                    <MenuItem value="0">Select</MenuItem>
                    <MenuItem value="1">One</MenuItem>
                    <MenuItem value="2">Two</MenuItem>
                    <MenuItem value="3">Three</MenuItem>
                    <MenuItem value="4">Four</MenuItem>
                    <MenuItem value="5">Five</MenuItem>
                    <MenuItem value="6">Six</MenuItem>
                    <MenuItem value="7">Seven</MenuItem>
                    <MenuItem value="8">Eight</MenuItem>
                    <MenuItem value="9">Nine</MenuItem>
                    <MenuItem value="10">Ten</MenuItem>
                  </Select>
                </Grid>
              </Grid>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid css={paddingcss} item xs={3}>
                  <label  >Gender</label>
                </Grid>
                <Grid direction="column" item xs={9}>
                  <RadioGroup
                    onChange={onChangeHandler}
                    value={formData.gender}
                  >
                    <FormControlLabel
                      value="male"
                      name="gender"
                      control={<Radio color="primary" />}
                      label="Male"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="female"
                      name="gender"
                      control={<Radio color="primary" />}
                      label="Female"
                      labelPlacement="end"
                    />
                    {/* <span>Male</span><Radio value="male" /> 
                    <span>Female</span><Radio value="female" />  */}
                  </RadioGroup>
                </Grid>
              </Grid>
              <Grid container spacing={7}>
                <Grid sm={6} item>
                  {currentindex.current === undefined ? (
                    <Button
                      type="button"
                      onClick={onSubmitHandler}
                      variant="contained"
                    >
                      Submit
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      onClick={onUpdatehandler}
                      variant="contained"
                    >
                      Update
                    </Button>
                  )}
                </Grid>
                <Grid sm={6} item>
                  <Button onClick={onCancleHandler} variant="contained">
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </div>
          </form>
        </Grid>
        <Grid item xs={5}></Grid>
      </Grid>
      <Dialog
        open={openDialoge}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you want to update form?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button onClick={agreedUpdate} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>

      <Grid css={formMarginCss} container>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>First Name</TableCell>
                  <TableCell>Middle Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Gender</TableCell>
                  <TableCell>Class</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {arrayData.length > 0 &&
                  arrayData.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.firstName}</TableCell>
                      <TableCell>{item.middleName}</TableCell>
                      <TableCell>{item.lastName}</TableCell>
                      <TableCell>{item.gender}</TableCell>
                      <TableCell>{item.class}</TableCell>
                      <TableCell>
                        <Button onClick={onEditHandler(index)}>Edit</Button>
                        <Button onClick={onDeleteButtonClick(index)}>
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </div>
  );
};
