import React from "react";
import "./app.scss";
import icon from "./Logo.svg";
import Tickets from "../tickets/tickets";
import TicketsFilter from "../tickets-filter/tickets-filter";

const App = () => {
  return (
    <React.Fragment>
      <header>
        <img src={icon} alt="Логотип компании" />
      </header>
      <main>
        <TicketsFilter />
        <Tickets />
      </main>
    </React.Fragment>
  );
};

export default App;
