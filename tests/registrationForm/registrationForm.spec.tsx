import Enzyme,{ mount } from "enzyme";
import React from "react";
import { IRegistrationProps, Registration } from "../../src/domian/registrationForm/components/Registration";
import { IRegistrationForm } from "../../src/domian/registrationForm/interfaces/IRegistrationForm";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({adapter: new Adapter()});

const mockOnChange: jest.Mock<any> = jest.fn();
const mockOnSubmit: jest.Mock<any> = jest.fn();
const mockOnEdit: jest.Mock<any> = jest.fn();

const props: IRegistrationProps = {
    onChange: mockOnChange,
    onSubmit: mockOnSubmit,
    onEdit: mockOnEdit,
    registrationList: [],
    registrationForm: {} as IRegistrationForm
};

describe('<RegistrationForm> tests', () => {
    it('should render registration form component', () => {
        const wrapper = mount(<Registration {...props} />);
        expect(wrapper.find(Registration).length).toBe(1);
    });
});

