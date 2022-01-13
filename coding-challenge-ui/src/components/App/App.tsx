import OverdueOrderTable from "../OverdueOrderTable/OverdueOrderTable"
import {AppWrapper, AppHeader, HeaderText, Username} from "./AppStyles"
import AppLogic from "./AppLogic"

const App = () => {

  const{user,overdueOrders}= AppLogic()
  return (
    <AppWrapper>
      <AppHeader>
        <HeaderText>Analytics Dashboard</HeaderText>
        <Username>Welcome, {user ? user.firstName : "Guest"}!</Username>
      </AppHeader>
      {
        <OverdueOrderTable heading="Overdue Orders" orders={overdueOrders} />
      }
    </AppWrapper>
  );
};

export default App;
