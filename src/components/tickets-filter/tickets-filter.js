import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setAll,
  switchOneTransfer,
  switchThreeTransfers,
  switchTwoTransfers,
  switchWithoutTransfers,
} from "../../redux/reducer";
import classes from "./tickets-filter.module.scss";

const TicketsFilter = () => {
  const checked = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  return (
    <aside className={classes["tickets-filter"]}>
      <p className={classes["filter-text"]}>Количество пересадок</p>
      <div>
        <input
          className={classes.checkbox}
          type="checkbox"
          name="all"
          id="flexCheckDefault1"
          checked={checked.all}
          onChange={() => {
            dispatch(setAll());
          }}
        />
        <label htmlFor="flexCheckDefault1">Все</label>
      </div>
      <div>
        <input
          className={classes.checkbox}
          type="checkbox"
          name="withoutTransfers"
          id="flexCheckDefault2"
          checked={checked.withoutTransfers}
          onChange={() => {
            dispatch(switchWithoutTransfers());
          }}
        />
        <label htmlFor="flexCheckDefault2">Без пересадок</label>
      </div>
      <div>
        <input
          className={classes.checkbox}
          type="checkbox"
          name="oneTransfer"
          id="flexCheckDefault3"
          checked={checked.oneTransfer}
          onChange={() => {
            dispatch(switchOneTransfer());
          }}
        />
        <label htmlFor="flexCheckDefault3">1 пересадка</label>
      </div>
      <div>
        <input
          className={classes.checkbox}
          type="checkbox"
          name="twoTransfers"
          id="flexCheckDefault4"
          checked={checked.twoTransfers}
          onChange={() => {
            dispatch(switchTwoTransfers());
          }}
        />
        <label htmlFor="flexCheckDefault4">2 пересадки</label>
      </div>
      <div>
        <input
          className={classes.checkbox}
          type="checkbox"
          name="threeTransfers"
          id="flexCheckDefault5"
          checked={checked.threeTransfers}
          onChange={() => {
            dispatch(switchThreeTransfers());
          }}
        />
        <label htmlFor="flexCheckDefault5">3 пересадки</label>
      </div>
    </aside>
  );
};

export default TicketsFilter;
