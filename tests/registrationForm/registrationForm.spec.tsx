import Enzyme, { mount } from "enzyme";
import React from "react";
import { IRegistrationProps, Registration } from "../../src/domian/registrationForm/components/Registration";
import { IRegistrationForm } from "../../src/domian/registrationForm/interfaces/IRegistrationForm";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

const mockOnChange: jest.Mock<any> = jest.fn();
const mockOnSubmit: jest.Mock<any> = jest.fn();
const mockOnEdit: jest.Mock<any> = jest.fn(() => 1);
const mockOnAgreeUpdate: jest.Mock<any> = jest.fn(()=> 1);
const mockOnDelete: jest.Mock<any> = jest.fn(()=> 1);
const mockGetRegistrationDetails: jest.Mock<any> = jest.fn();
const mockOnCancel: jest.Mock<any> = jest.fn();

const props: IRegistrationProps = {
    onChange: mockOnChange,
    onSubmit: mockOnSubmit,
    onEdit: mockOnEdit,
    onAgreeUpdate: mockOnAgreeUpdate,
    onDelete: mockOnDelete,
    registrationList: [],
    registrationForm: {} as IRegistrationForm,
    getRegistrationDetails: mockGetRegistrationDetails,
    onCancle: mockOnCancel

};

describe('<RegistrationForm> tests', () => {
    afterEach(() => {
        jest.clearAllMocks();
        jest.resetAllMocks();
    });
    it('should render registration form component', () => {
        const wrapper = mount(<Registration {...props} />);
        expect(wrapper.find(Registration).length).toBe(1);
    });

    it('should verify the registration form component props', () => {
        const wrapper = mount(<Registration {...props} />);

        const registrationWrapper = wrapper.find(Registration);

        expect(registrationWrapper.prop('onChange')).toBe(mockOnChange);
        expect(registrationWrapper.prop('onSubmit')).toBe(mockOnSubmit);
        expect(registrationWrapper.prop('onEdit')).toBe(mockOnEdit);
        expect(registrationWrapper.prop('onAgreeUpdate')).toBe(mockOnAgreeUpdate);
        expect(registrationWrapper.prop('onDelete')).toBe(mockOnDelete);
        expect(registrationWrapper.prop('registrationList')).toStrictEqual([]);
        expect(registrationWrapper.prop('registrationForm')).toStrictEqual({});
    });

    it('should update the first name text when enter the input value', () => {
        const wrapper = mount(<Registration {...props} />);
        const event = { target: { value: 'test', name: 'firstName' } };
        wrapper.find("input[name='firstName']").simulate('change', event);

        expect(mockOnChange.mock.calls.length).toBe(1);
        expect(mockOnChange).toHaveBeenCalledWith('firstName', 'test');
    });

    it('should update the middle name text when enter the input value', () => {
        const wrapper = mount(<Registration {...props} />);
        const event = { target: { value: 'test', name: 'middleName' } };
        wrapper.find("input[name='middleName']").simulate('change', event);

        expect(mockOnChange.mock.calls.length).toBe(1);
        expect(mockOnChange).toHaveBeenCalledWith('middleName', 'test');
    });

    it('should update the last name text when enter the input value', () => {
        const wrapper = mount(<Registration {...props} />);
        const event = { target: { value: 'test', name: 'lastName' } };
        wrapper.find("input[name='lastName']").simulate('change', event);

        expect(mockOnChange.mock.calls.length).toBe(1);
        expect(mockOnChange).toHaveBeenCalledWith('lastName', 'test');
    });

    it('should update the selected class when select the class', () => {
        const wrapper = mount(<Registration {...props} />);
        const event = { target: { value: '3', name: 'claass' } };
        wrapper.find("input[name='claass']").simulate('change', event);

        expect(mockOnChange.mock.calls.length).toBe(1);
        expect(mockOnChange).toHaveBeenCalledWith('claass', '3');
    });

    it('should update the selected gender when select the gender', () => {
        const wrapper = mount(<Registration {...props} />);
        const event = { target: { value: 'male', name: 'gender' } };
        wrapper.find('input[value="male"]').simulate('change', { target: { checked: true } });

        expect(mockOnChange.mock.calls.length).toBe(1);
    });

    it('should submit the registration form when click on submit button', () => {
        const registrationForm = {
            firstName: "test",
            middleName: "middle",
            lastName: "name",
            gender: "female",
            claass: "3",
            id: 0
        };
        const wrapper = mount(<Registration {...props} registrationForm={registrationForm} />);

        wrapper.find('button#submitRegistrationForm').first().simulate('click');

        expect(mockOnSubmit.mock.calls.length).toBe(1);
        expect(mockOnSubmit).toHaveBeenCalledWith(registrationForm);
    });

    it('should not submit the registration form when click on submit button and firstname is empty', () => {
        const registrationForm = {
            firstName: "",
            middleName: "middle",
            lastName: "name",
            gender: "female",
            claass: "3",
            id: 0
        };
        const wrapper = mount(<Registration {...props} registrationForm={registrationForm} />);

        wrapper.find('button#submitRegistrationForm').first().simulate('click');

        expect(mockOnSubmit.mock.calls.length).toBe(0);
        expect(mockOnSubmit).not.toHaveBeenCalled();
    });

    it('should not submit the registration form when click on submit button and middlename is empty', () => {
        const registrationForm = {
            firstName: "test",
            middleName: "",
            lastName: "name",
            gender: "female",
            claass: "3",
            id: 0
        };
        const wrapper = mount(<Registration {...props} registrationForm={registrationForm} />);

        wrapper.find('button#submitRegistrationForm').first().simulate('click');

        expect(mockOnSubmit.mock.calls.length).toBe(0);
        expect(mockOnSubmit).not.toHaveBeenCalled();
    });

    it('should not submit the registration form when click on submit button and lastname is empty', () => {
        const registrationForm = {
            firstName: "test",
            middleName: "middle",
            lastName: "",
            gender: "female",
            claass: "3",
            id: 0
        };
        const wrapper = mount(<Registration {...props} registrationForm={registrationForm} />);

        wrapper.find('button#submitRegistrationForm').first().simulate('click');

        expect(mockOnSubmit.mock.calls.length).toBe(0);
        expect(mockOnSubmit).not.toHaveBeenCalled();
    });

    it('should not submit the registration form when click on submit button and class is empty', () => {
        const registrationForm = {
            firstName: "test",
            middleName: "middle",
            lastName: "name",
            gender: "female",
            claass: "0",
            id: 0
        };
        const wrapper = mount(<Registration {...props} registrationForm={registrationForm} />);

        wrapper.find('button#submitRegistrationForm').first().simulate('click');

        expect(mockOnSubmit.mock.calls.length).toBe(0);
        expect(mockOnSubmit).not.toHaveBeenCalled();
    });

    it('should edit the registration details when click on edit button', () => {
        const registrationList = [{
            firstName: "test",
            middleName: "middle",
            lastName: "name",
            gender: "female",
            claass: "3",
            id: 0
        }, {
            firstName: "test1",
            middleName: "middle1",
            lastName: "name1",
            gender: "male",
            claass: "4",
            id: 1
        }];
        const wrapper = mount(<Registration {...props} registrationList={registrationList} />);
        wrapper.find('button#editButton_1').simulate('click',);

        expect(mockOnEdit.mock.calls.length).toBe(1);
        expect(mockOnEdit).toHaveBeenCalledWith(1);

        wrapper.setProps({
            registrationForm: {
                firstName: "test1",
                middleName: "middle1",
                lastName: "name1",
                gender: "male",
                claass: "4"
            }
        });

        expect(wrapper.find("input[name='firstName']").prop('value')).toBe('test1');
        expect(wrapper.find("input[name='middleName']").prop('value')).toBe('middle1');
        expect(wrapper.find("input[name='lastName']").prop('value')).toBe('name1');
        expect(wrapper.find("input[value='male']").prop('checked')).toBe(true);
        expect(wrapper.find("input[value='female']").prop('checked')).toBe(false);
        expect(wrapper.find("input[name='claass']").prop('value')).toBe('4');
    });
 
    it('should open delete dialog box when user click on delete button', () => {
        const registrationList = [{
            firstName: "test",
            middleName: "middle",
            lastName: "name",
            gender: "female",
            claass: "3",
            id: 0
        }, {
            firstName: "test1",
            middleName: "middle1",
            lastName: "name1",
            gender: "male",
            claass: "4",
            id: 1
        }];
        const wrapper = mount(<Registration {...props} registrationList={registrationList} />);
        
        wrapper.find('#deleteButton_1').first().simulate('click');
        expect(wrapper.find('#deleteDialog').first().prop('open')).toBe(true);
    });

    it('should delete the record when user is confirmed from delete dialog box', () => {
        const registrationList = [{
            firstName: "test",
            middleName: "middle",
            lastName: "name",
            gender: "female",
            claass: "3",
            id: 0
        }, {
            firstName: "test1",
            middleName: "middle1",
            lastName: "name1",
            gender: "male",
            claass: "4",
            id: 1
        }];
        const wrapper = mount(<Registration {...props} registrationList={registrationList} />);
        
        wrapper.find('#deleteButton_1').first().simulate('click');
        wrapper.find('#deleteButtonConfirm').first().simulate('click');

        expect(mockOnDelete.mock.calls.length).toBe(1);
        expect(mockOnDelete).toHaveBeenCalledWith(1);
    });

    it('should close the delete dialog box when user is click on the no button of delete dialog box', () => {
        const registrationList = [{
            firstName: "test",
            middleName: "middle",
            lastName: "name",
            gender: "female",
            claass: "3",
            id: 0
        }, {
            firstName: "test1",
            middleName: "middle1",
            lastName: "name1",
            gender: "male",
            claass: "4",
            id: 1
        }];
        const wrapper = mount(<Registration {...props} registrationList={registrationList} />);
        
        wrapper.find('#deleteButton_1').first().simulate('click');
        wrapper.find('#deleteDialogCancel').first().simulate('click');
     
        expect(wrapper.find('#deleteDialog').first().prop('open')).toBe(false);
    });

    it('should update the firstname from registration details when click on update button', () => {
        const registrationList = [{
            firstName: "test",
            middleName: "middle",
            lastName: "name",
            gender: "female",
            claass: "3",
            id: 0
        }, {
            firstName: "test1",
            middleName: "middle1",
            lastName: "name1",
            gender: "male",
            claass: "4",
            id: 1
        }];
        const wrapper = mount(<Registration {...props} registrationList={registrationList} />);
        wrapper.find('button#editButton_1').simulate('click',);

        expect(mockOnEdit.mock.calls.length).toBe(1);
        expect(mockOnEdit).toHaveBeenCalledWith(1);

        wrapper.setProps({
            registrationForm: {
                firstName: "test1",
                middleName: "middle1",
                lastName: "name1",
                gender: "male",
                claass: "4"
            }
        });

        expect(wrapper.find("input[name='firstName']").prop('value')).toBe('test1');
        expect(wrapper.find("input[name='middleName']").prop('value')).toBe('middle1');
        expect(wrapper.find("input[name='lastName']").prop('value')).toBe('name1');
        expect(wrapper.find("input[value='male']").prop('checked')).toBe(true);
        expect(wrapper.find("input[value='female']").prop('checked')).toBe(false);
        expect(wrapper.find("input[name='claass']").prop('value')).toBe('4');

        const event = { target: { value: 'test verify', name: 'firstName' } };
        wrapper.find("input[name='firstName']").simulate('change', event);

        expect(mockOnChange.mock.calls.length).toBe(1);
        expect(mockOnChange).toHaveBeenCalledWith('firstName', 'test verify');

        wrapper.find('#updateButton').first().simulate('click');
        expect(wrapper.find('#updateDialogConfirm').first().prop('open')).toBe(true);

        wrapper.find('#updateConfirmButton').first().simulate('click');
        expect(wrapper.find('#updateDialogConfirm').first().prop('open')).toBe(false);
        
        const updatedRegistrationList = [{
            firstName: "test",
            middleName: "middle",
            lastName: "name",
            gender: "female",
            claass: "3"
        }, {
            firstName: "test verify",
            middleName: "middle1",
            lastName: "name1",
            gender: "male",
            claass: "4"
        }];

        wrapper.setProps({ registrationList: updatedRegistrationList });

        expect(wrapper.find('#table_1 #tableFirstName_1').first().text()).toBe('test verify');
        expect(wrapper.find('#table_1 #tableMiddleName_1').first().text()).toBe('middle1');
        expect(wrapper.find('#table_1 #tableLastName_1').first().text()).toBe('name1');
        expect(wrapper.find('#table_1 #tableGenderName_1').first().text()).toBe('male');
        expect(wrapper.find('#table_1 #tableClassName_1').first().text()).toBe('4');
    });

    it('should close the update dialog box when click on no button', () => {
        const registrationList = [{
            firstName: "test",
            middleName: "middle",
            lastName: "name",
            gender: "female",
            claass: "3",
            id: 0
        }, {
            firstName: "test1",
            middleName: "middle1",
            lastName: "name1",
            gender: "male",
            claass: "4",
            id: 1
        }];
        const wrapper = mount(<Registration {...props} registrationList={registrationList} />);
        wrapper.find('button#editButton_1').simulate('click',);

        expect(mockOnEdit.mock.calls.length).toBe(1);
        expect(mockOnEdit).toHaveBeenCalledWith(1);

        wrapper.setProps({
            registrationForm: {
                firstName: "test1",
                middleName: "middle1",
                lastName: "name1",
                gender: "male",
                claass: "4"
            }
        });

        expect(wrapper.find("input[name='firstName']").prop('value')).toBe('test1');
        expect(wrapper.find("input[name='middleName']").prop('value')).toBe('middle1');
        expect(wrapper.find("input[name='lastName']").prop('value')).toBe('name1');
        expect(wrapper.find("input[value='male']").prop('checked')).toBe(true);
        expect(wrapper.find("input[value='female']").prop('checked')).toBe(false);
        expect(wrapper.find("input[name='claass']").prop('value')).toBe('4');

        const event = { target: { value: 'test verify', name: 'firstName' } };
        wrapper.find("input[name='firstName']").simulate('change', event);

        expect(mockOnChange.mock.calls.length).toBe(1);
        expect(mockOnChange).toHaveBeenCalledWith('firstName', 'test verify');

        wrapper.find('#updateButton').first().simulate('click');
        expect(wrapper.find('#updateDialogConfirm').first().prop('open')).toBe(true);

        wrapper.find('#updateDialogCancelButton').first().simulate('click');
        expect(wrapper.find('#updateDialogConfirm').first().prop('open')).toBe(false);
        
        const updatedRegistrationList = [{
            firstName: "test",
            middleName: "middle",
            lastName: "name",
            gender: "female",
            claass: "3"
        }, {
            firstName: "test1",
            middleName: "middle1",
            lastName: "name1",
            gender: "male",
            claass: "4"
        }];

        wrapper.setProps({ registrationList: updatedRegistrationList });

        expect(wrapper.find('#table_1 #tableFirstName_1').first().text()).toBe('test1');
        expect(wrapper.find('#table_1 #tableMiddleName_1').first().text()).toBe('middle1');
        expect(wrapper.find('#table_1 #tableLastName_1').first().text()).toBe('name1');
        expect(wrapper.find('#table_1 #tableGenderName_1').first().text()).toBe('male');
        expect(wrapper.find('#table_1 #tableClassName_1').first().text()).toBe('4');
    });

    it('should apply css style on registration form when component is mount',()=>{
        const wrapper = mount(<Registration {...props} />);
        const computedStyle = getComputedStyle(
            wrapper.find('form#registrationForm').first().getDOMNode()
        );
        expect(computedStyle.getPropertyValue('margin-top')).toBe('50px');
    });
});

