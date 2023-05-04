import React from "react";
import classes from "./tickets.module.scss";
import TicketCard from "../ticket-card/ticket-card";

const Tickets = () => {
  return (
    <section className={classes.tickets}>
      <div className="btn-group">
        <button
          className={`btn btn-light ${classes["tickets-btn"]} ${classes["btn-active"]}`}
        >
          Самый дешёвый
        </button>
        <button className={`btn btn-light ${classes["tickets-btn"]}`}>
          Самый быстрый
        </button>
      </div>
      <ul>
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </ul>
      <button className={`btn ${classes["btn-active"]}`}>
        Показать еще 5 билетов!
      </button>
    </section>
  );
};

export default Tickets;
