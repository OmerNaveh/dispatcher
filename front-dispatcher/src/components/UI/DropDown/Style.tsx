import * as React from "react";
import SelectUnstyled, {
  SelectUnstyledProps,
  selectUnstyledClasses,
} from "@mui/base/SelectUnstyled";
import OptionUnstyled, {
  optionUnstyledClasses,
} from "@mui/base/OptionUnstyled";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import { styled } from "@mui/system";
import drowDownSvg from "../../../assets/dropdown.svg";
import { colors } from "../../../strings/colors";

const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};

const StyledButton = styled("button")(
  ({ theme }) => `
  font-family: Roboto;
  font-weight:400;
  font-size: 0.875rem;
  box-sizing: border-box;
  background: ${colors.White};
  border: none;
  border-radius: 0.75em;
  margin: 0.5em;
  padding: 1em;
  text-align: left;
  line-height: 1.5;
  color: ${colors.DarkBlue};
  &:hover {
    background: ${colors.LightGray};
    border-color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  }

  &.${selectUnstyledClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[600] : blue[100]};
  }
  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: url(${drowDownSvg});
      transform: rotate(180deg);
    }
  }

  &::after {
    content: url(${drowDownSvg});
    float: right;
  }
  `
);

const StyledListbox = styled("ul")(
  ({ theme }) => `
  font-family: Roboto;
  font-weight:400;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 5px;
  margin: 10px 0;
  min-width: 320px;
  background: ${colors.White};
  border: none;
  border-radius: 0.75em;
  color: ${colors.DarkBlue};
  overflow: auto;
  outline: 0px;
  max-height: 25vh;
  @media only screen and (max-width: 900px) {
    max-height: 15vh;
  }
  @media only screen and (max-width: 450px) {
    max-height: 15vh;
  }
  `
);

export const StyledOption = styled(OptionUnstyled)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 0.45em;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: ${colors.Gray};
    color: ${colors.DarkBlue};
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: ${colors.Gray};
    color: ${colors.DarkBlue};
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: ${colors.LightGray};
    color: ${colors.DarkBlue};
  }

  &.${optionUnstyledClasses.disabled} {
    color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: ${colors.LightestGray};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }
  `
);

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

export const CustomSelect = React.forwardRef(function CustomSelect<TValue>(
  props: SelectUnstyledProps<TValue>,
  ref: React.ForwardedRef<HTMLUListElement>
) {
  const components: SelectUnstyledProps<TValue>["components"] = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components,
  };

  return <SelectUnstyled {...props} ref={ref} components={components} />;
}) as <TValue>(
  props: SelectUnstyledProps<TValue> & React.RefAttributes<HTMLUListElement>
) => JSX.Element;
