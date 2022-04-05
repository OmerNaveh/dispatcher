import React from "react";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import { TextField } from "@mui/material";
import { apiStrings, dateStrings } from "../../../../strings/strings";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { ReactComponent as DateIcon } from "../../../../assets/date.svg";
import { StyledDateDiv } from "./style";
import { filterActions } from "../../../../store/slicers/filtersSlice";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { apiCallthunk, getApiUrl } from "../../../../helpers/apiCall";
interface dateinputProps {
  openDirectly?: boolean;
}
const DateInput = ({ openDirectly }: dateinputProps) => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  const dispatch = useAppDispatch();
  const filterState = useAppSelector((state) => state.filters);
  return (
    <StyledDateDiv sideBar={openDirectly}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          disableFuture
          open={openDirectly}
          openTo={dateStrings.Year}
          views={[dateStrings.Year, dateStrings.Month, dateStrings.Day]}
          value={selectedDate}
          onChange={(newValue) => {
            if (newValue) {
              dispatch(filterActions.setDate(newValue.toISOString()));
              const apiUrl = getApiUrl({
                ...filterState,
                date: newValue.toISOString(),
              });
              dispatch(apiCallthunk(apiUrl));
            }
            setSelectedDate(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              inputProps={{
                ...params.inputProps,
                placeholder: apiStrings.Everything[1],
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

export default DateInput;
