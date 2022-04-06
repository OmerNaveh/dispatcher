import React, { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import { ReactComponent as SearchIcon } from "../../../assets/search.svg";
import {
  apiStrings,
  headerStrings,
  positionString,
} from "../../../strings/strings";
import { StyledExitIcon, StyledInputWithIcon } from "../style";
import HistoryDiv from "../HistoryDiv/HistoryDiv";
import _ from "lodash";
import { useAppDispatch, useAppSelector } from "../../../store";
import { filterActions } from "../../../store/slicers/filtersSlice";
import { apiCallthunk, getApiUrl } from "../../../helpers/apiCall";
import { usefulNumbers } from "../../../strings/numbers";
import {
  addToHistory,
  getHistory,
  isAlreadyInStorage,
} from "../../../helpers/localStorageUsage";
interface props {
  mobile?: boolean;
  focused?: boolean;
  setFocused: (value: React.SetStateAction<boolean>) => void;
}
const InputWithIcon = ({ setFocused, mobile, focused }: props) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [historyData, setHistoryData] = useState<string[]>(getHistory());
  const dispatch = useAppDispatch();
  const filterState = useAppSelector((state) => state.filters);
  const clearValue = () => {
    inputValue && setInputValue("");
  };

  const debounceSearchFunc = (enteredValue: string) => {
    _.debounce(() => {
      dispatch(filterActions.setSearchInput(enteredValue));
      if (enteredValue) {
        const url = getApiUrl({ ...filterState, searchInput: enteredValue });
        dispatch(apiCallthunk(url));
        if (!isAlreadyInStorage(enteredValue)) {
          addToHistory(enteredValue);
          setHistoryData((prev) => [...prev, enteredValue]);
        }
      }
    }, usefulNumbers.debounceTime)();
  };
  const handleHistoryClick = (historyStr: string) => {
    debounceSearchFunc(historyStr);
    setInputValue(historyStr);
  };
  return (
    <>
      <StyledInputWithIcon
        mobile={mobile}
        onFocus={() => setFocused(true)}
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
          debounceSearchFunc(event.target.value);
        }}
        placeholder={!focused ? headerStrings.Search : undefined}
        disableUnderline={true}
        endAdornment={
          <InputAdornment
            position={!mobile ? positionString.Start : positionString.End}
          >
            {mobile && inputValue && <StyledExitIcon onClick={clearValue} />}
          </InputAdornment>
        }
        startAdornment={
          <InputAdornment
            position={!mobile ? positionString.Start : positionString.End}
          >
            {!mobile && <SearchIcon />}
          </InputAdornment>
        }
      />

      {focused && (
        <HistoryDiv
          historyData={historyData}
          setHistoryData={setHistoryData}
          handleHistoryClick={handleHistoryClick}
          mobile={mobile}
        />
      )}
    </>
  );
};
export default InputWithIcon;
