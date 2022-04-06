import React from "react";
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import { TextField } from "@mui/material";
import {
  apiStrings,
  dateStrings,
  sideBarString,
} from "../../../../strings/strings";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { ReactComponent as DateIcon } from "../../../../assets/date.svg";
import { StyledDateDiv } from "./style";
import { filterActions } from "../../../../store/slicers/filtersSlice";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { colors } from "../../../../strings/colors";
interface dateinputProps {
  isSideBar?: boolean;
}
const MobileDateInput = ({ isSideBar }: dateinputProps) => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  const dispatch = useAppDispatch();
  const filterState = useAppSelector((state) => state.filters);
  return (
    <StyledDateDiv sideBar={isSideBar}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileDatePicker
          disableFuture
          minDate={new Date("2022-03-05")}
          maxDate={new Date()}
          openTo={dateStrings.Month}
          views={[dateStrings.Year, dateStrings.Month, dateStrings.Day]}
          value={selectedDate}
          onChange={(newValue) => {
            if (newValue) {
              dispatch(
                filterActions.setDate(newValue.toISOString().slice(0, 10))
              );
            }
            setSelectedDate(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              inputProps={{
                ...params.inputProps,
                readOnly: true,
                placeholder: sideBarString.ClickToSelect,
                style: { cursor: "pointer", color: colors.DarkBlue },
              }}
            />
          )}
          components={{
            OpenPickerIcon: DateIcon,
          }}
        />
      </LocalizationProvider>
    </StyledDateDiv>
  );
};

export default MobileDateInput;
