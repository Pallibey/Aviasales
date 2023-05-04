import React from "react";
import classes from "./ticket-card.module.scss";
import logo from "./S7 Logo.png";

const TicketCard = () => {
  return (
    <li className={`card ${classes.card}`}>
      <div className="card-body">
        <div className={`card-title ${classes["card-title"]}`}>
          <h5>13 400 Р</h5>
          <img className="card-logo" src={logo} alt="Логотип авиакомпании" />
        </div>
        <table className={`table ${classes.table}`}>
          <tbody>
            <tr>
              <td>
                <p className={classes["card-text-secondary"]}>MOW – HKT</p>
                <p className={classes["card-text"]}>10:45 – 08:00</p>
              </td>
              <td>
                <p className={classes["card-text-secondary"]}>В пути</p>
                <p className={classes["card-text"]}>21ч 15м</p>
              </td>
              <td>
                <p className={classes["card-text-secondary"]}>2 пересадки</p>
                <p className={classes["card-text"]}>HKG, JNB</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className={classes["card-text-secondary"]}>MOW – HKT</p>
                <p className={classes["card-text"]}>11:20 – 00:50</p>
              </td>
              <td>
                <p className={classes["card-text-secondary"]}>В пути</p>
                <p className={classes["card-text"]}>13ч 30м</p>
              </td>
              <td>
                <p className={classes["card-text-secondary"]}>1 пересадка</p>
                <p className={classes["card-text"]}>HKG</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </li>
  );
};

export default TicketCard;
