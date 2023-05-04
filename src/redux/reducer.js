import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    all: false,
    withoutTransfers: false,
    oneTransfer: false,
    twoTransfers: false,
    threeTransfers: false,
    checked: 0,
  },
  reducers: {
    setAll: (state) => {
      let check = true;
      if (state.all === true) {
        check = false;
        state.checked = 0;
      } else {
        state.checked = 4;
      }
      state.all = check;
      state.withoutTransfers = check;
      state.oneTransfer = check;
      state.twoTransfers = check;
      state.threeTransfers = check;
    },
    switchWithoutTransfers: (state) => {
      if (state.withoutTransfers === true) {
        state.all = false;
        state.checked--;
      } else {
        state.checked++;
      }
      state.withoutTransfers = !state.withoutTransfers;
      if (state.checked === 4) {
        state.all = true;
      }
    },
    switchOneTransfer: (state) => {
      if (state.oneTransfer === true) {
        state.all = false;
        state.checked--;
      } else {
        state.checked++;
      }
      state.oneTransfer = !state.oneTransfer;
      if (state.checked === 4) {
        state.all = true;
      }
    },
    switchTwoTransfers: (state) => {
      if (state.twoTransfers === true) {
        state.all = false;
        state.checked--;
      } else {
        state.checked++;
      }
      state.twoTransfers = !state.twoTransfers;
      if (state.checked === 4) {
        state.all = true;
      }
    },
    switchThreeTransfers: (state) => {
      if (state.threeTransfers === true) {
        state.all = false;
        state.checked--;
      } else {
        state.checked++;
      }
      state.threeTransfers = !state.threeTransfers;
      if (state.checked === 4) {
        state.all = true;
      }
    },
  },
});

export const {
  setAll,
  switchWithoutTransfers,
  switchOneTransfer,
  switchTwoTransfers,
  switchThreeTransfers,
} = filtersSlice.actions;

export default filtersSlice.reducer;
