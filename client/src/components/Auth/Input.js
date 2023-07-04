import React from "react";
import { TextField, Grid } from "@material-ui/core";

const Input = ({
  name,
  handleChange,
  label,
  autoFocus,
  type,
  half,
  error,
  helperText,
}) => (
  <Grid item xs={12} sm={half ? 6 : 12}>
    <TextField
      name={name}
      onChange={handleChange}
      variant="outlined"
      required
      fullWidth
      label={label}
      autoFocus={autoFocus}
      type={type}
      error={error}
      helperText={helperText}
    />
  </Grid>
);

export default Input;
