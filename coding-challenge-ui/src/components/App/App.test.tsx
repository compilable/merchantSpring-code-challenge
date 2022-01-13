
import { render } from '@testing-library/react'
import App from './App';
import { shallow, mount, ReactWrapper } from 'enzyme';
import toJSON from "enzyme-to-json"
import { act } from "react-dom/test-utils"

import AppLogic from "./AppLogic"

describe('test user data recived', () => {
  /*const{user,setUser}= AppLogic()
  beforeEach(() => {
    setUser({
      firstName: "Jane",
      lastName: "Doe",
      email: "janedoe@email.com",
      id: 1,
    });
  });
  it('should SET the user data', () => {
    console.log(user)
  });*/
//  expect(toJSON(wrapper)).toMatchSnapshot();
});


test("has the main component loaded", () => {
  const wrapper = shallow(<App />);
  expect(toJSON(wrapper)).toMatchSnapshot()
});

test("has OverdueOrderTable component loaded", () => {
  const wrapper = shallow(<App />);
  expect(toJSON(wrapper)).toMatchSnapshot()
  expect(wrapper.text().includes("OverdueOrderTable"))
});

test('renders app title', () => {
  const { getByText } = render(<App />);
  const headerText = getByText("Analytics Dashboard");
  expect(headerText)
});

test('renders user name', () => {
  const { getByText } = render(<App />);
  const headerText = getByText("Welcome, Guest!");
  expect(headerText)
});
