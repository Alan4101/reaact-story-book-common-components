import React, { FC, useState } from "react";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import { useToggleStyle } from "./CustomToggle.style";

interface ToggleProps {
  // onChange: ((status: boolean) => void) | ((e: React.ChangeEvent<HTMLInputElement>) => void);
  onChange: (status: boolean) => void;
  label?: string;
  value?: boolean;
  pending: boolean;
  name?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export const Toggle: FC<ToggleProps> = ({
  onChange,
  label,
  value,
  pending,
  onClick,
}) => {
  const [checked, setChecked] = useState(value);
  const classes = useToggleStyle();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    onChange(event.target.checked);
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            classes={{
              root: classes.root,
              track: classes.track,
              switchBase: classes.switchBase,
              checked: classes.checked,
            }}
            checked={pending ? checked : value}
            onChange={handleChange}
            name={label + "Toggle"}
            onClick={onClick}
            // color="primary"
          />
        }
        label={label || ""}
        className={classes.label}
      />
    </FormGroup>
  );
};
