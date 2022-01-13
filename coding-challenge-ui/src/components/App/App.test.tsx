
import { render} from '@testing-library/react'
import App from './App';
import { shallow } from 'enzyme';
import toJSON from "enzyme-to-json";

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
