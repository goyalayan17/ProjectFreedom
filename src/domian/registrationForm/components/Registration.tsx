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
	Table,
	TableCell,
	TableHead,
	TableRow,
	TableBody,
	Dialog,
	DialogActions,
	DialogTitle,
} from '@material-ui/core';
import * as React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import { IRegistrationForm } from '../interfaces';
import { formMarginCss, headerCss, paddingcss, inputWidthCss, selectCss } from './Styles.RegistrationForm';

export interface IRegistrationProps {
	onChange: (name: string, value: string | number) => void;
	onSubmit: (registrationForm: IRegistrationForm) => void;
	onEdit: (index: number | undefined) => void;
	onAgreeUpdate: (index: number | undefined, registrationForm: IRegistrationForm) => void;
	onDelete: (index: number | undefined) => void;
	getRegistrationDetails: () => void;
	onCancle: () => void;
	registrationList: IRegistrationForm[];
	registrationForm: IRegistrationForm;
}

export const Registration: React.FC<IRegistrationProps> = ({
	onChange,
	onSubmit,
	onEdit,
	onAgreeUpdate,
	onDelete,
	onCancle,
	registrationList,
	registrationForm,
	getRegistrationDetails,
}: IRegistrationProps) => {
	const formDetails = {
		id: undefined,
		firstName: '',
		middleName: '',
		lastName: '',
		gender: 'female',
		claass: '0',
	};
	const currentindex = React.useRef<number | undefined>(undefined);
	const deleterindex = React.useRef<number | undefined>(undefined);
	const [openDialoge, setOpenDialoge] = React.useState(false);
	const [otherDialoge, setOtherDialoge] = React.useState(false);
	const [formValid, setFormValid] = React.useState<boolean>(true);
	const { firstName, lastName, middleName, gender, claass } = registrationForm;
	React.useEffect(() => {
		getRegistrationDetails();
	}, []);
	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value: string = event.target.value;
		const name: string = event.target.name;
		onChange(name, value);
	};
	const onSubmitHandler = async (event: any) => {
		if (firstName && lastName && middleName && claass !== '0') {
			await onSubmit(registrationForm);
			getRegistrationDetails();
			setFormValid(true);
		} else {
			setFormValid(false);
		}
	};
	const onUpdatehandler = (event: any) => {
		setOpenDialoge(true);
	};
	const agreedUpdate = async (event: any) => {
		await onAgreeUpdate(currentindex.current, registrationForm);
		getRegistrationDetails();
		currentindex.current = undefined;
		setOpenDialoge(false);
	};

	const handleClose = () => {
		setOpenDialoge(false);
	};

	const onCancleHandler = () => {
		currentindex.current = undefined;
		onCancle();
	};

	const onEditHandler = (index: number | undefined) => (event: any) => {
		onEdit(index);
		currentindex.current = index;
	};

	const otherDialogClose = () => {
		setOtherDialoge(false);
	};
	const onDeleteButtonClick = (index: number | undefined) => (event: any) => {
		deleterindex.current = index;
		setOtherDialoge(true);
	};
	const deleteEntryDialoge = async () => {
		await onDelete(deleterindex.current);
		getRegistrationDetails();
		deleterindex.current = undefined;
		setOtherDialoge(false);
	};
	return (
		<div>
			<Grid css={headerCss} container justifyContent="center" direction="row" item>
				<h1>STUDENT MANAGEMENT SYSTEM</h1>
			</Grid>
			{!formValid && (
				<Alert severity="error">
					<AlertTitle>Error</AlertTitle>
					This is an error alert — <strong>Fill The Form!</strong>
				</Alert>
			)}
			<Grid container>
				<Grid lg={5} xs={4} md={5} sm={5} item></Grid>
				<Grid lg={2} xs={4} md={3} sm={3} item>
					<form id="registrationForm" method="post" css={formMarginCss}>
						<div>
							<TextField
								{...(!firstName && !formValid && { error: true })}
								onChange={onChangeHandler}
								name="firstName"
								value={firstName || ''}
								label="First Name"
								css={inputWidthCss}
							/>
							<TextField
								{...(!middleName && !formValid && { error: true })}
								onChange={onChangeHandler}
								name="middleName"
								value={middleName || ''}
								label="Middle Name"
								css={inputWidthCss}
							/>
							<TextField
								{...(!lastName && !formValid && { error: true })}
								onChange={onChangeHandler}
								name="lastName"
								value={lastName || ''}
								label="Last Name"
								css={inputWidthCss}
							/>
							<Grid container direction="row" css={selectCss} spacing={2} alignItems="center">
								<Grid sm={3} item>
									<label>Class</label>
								</Grid>
								<Grid sm={9} item>
									<Select
										{...(formDetails.claass === '0' && !formValid && { error: true })}
										label="Class"
										onChange={onChangeHandler}
										name="claass"
										value={claass || '0'}
										css={inputWidthCss}>
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
							<Grid container css={selectCss}>
								<Grid css={paddingcss} item md={3}>
									<label>Gender</label>
								</Grid>
								<Grid item md={2}></Grid>
								<Grid container direction="column" item md={7}>
									<RadioGroup
										id="genderRadioGroup"
										onChange={onChangeHandler}
										value={gender || 'male'}
										css={inputWidthCss}>
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
									</RadioGroup>
								</Grid>
							</Grid>
							<Grid container css={paddingcss} spacing={4}>
								<Grid md={6} item>
									{currentindex.current === undefined ? (
										<Button id="submitRegistrationForm" type="button" onClick={onSubmitHandler} variant="contained">
											Submit
										</Button>
									) : (
										<Button id="updateButton" type="button" onClick={onUpdatehandler} variant="contained">
											Update
										</Button>
									)}
								</Grid>
								<Grid md={6} item>
									<Button id="cancelButton" onClick={onCancleHandler} variant="contained">
										Cancel
									</Button>
								</Grid>
							</Grid>
						</div>
					</form>
				</Grid>
				<Grid item lg={5} xs={4} md={4} sm={4}></Grid>
			</Grid>
			<Grid css={formMarginCss} container>
				<Grid item xs={2}></Grid>
				<Grid item xs={8}>
					<TableContainer>
						<Table>
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
								{registrationList?.length > 0 &&
									registrationList.map((item, index) => (
										<TableRow id={`table_${index}`} key={index}>
											<TableCell id={`tableFirstName_${index}`}>{item.firstName}</TableCell>
											<TableCell id={`tableMiddleName_${index}`}>{item.middleName}</TableCell>
											<TableCell id={`tableLastName_${index}`}>{item.lastName}</TableCell>
											<TableCell id={`tableGenderName_${index}`}>{item.gender}</TableCell>
											<TableCell id={`tableClassName_${index}`}>{item.claass}</TableCell>
											<TableCell>
												<Button id={`editButton_${index}`} onClick={onEditHandler(index)}>
													Edit
												</Button>
												<Button id={`deleteButton_${index}`} onClick={onDeleteButtonClick(index)}>
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
			{/* Update Dialoge */}
			<Dialog id="updateDialogConfirm" open={openDialoge} onClose={handleClose}>
				<DialogTitle>{'Do you want to update form?'}</DialogTitle>
				<DialogActions>
					<Button id="updateDialogCancelButton" onClick={handleClose} color="primary">
						No
					</Button>
					<Button id="updateConfirmButton" onClick={agreedUpdate} color="primary" autoFocus>
						Yes
					</Button>
				</DialogActions>
			</Dialog>
			{/* Delete Dialoge */}
			<Dialog id="deleteDialog" open={otherDialoge} onClose={otherDialogClose}>
				<DialogTitle>{'Do you want to delete entry?'}</DialogTitle>
				<DialogActions>
					<Button id="deleteDialogCancel" onClick={otherDialogClose} color="secondary">
						No
					</Button>
					<Button id="deleteButtonConfirm" onClick={deleteEntryDialoge} color="secondary" autoFocus>
						Yes
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};
