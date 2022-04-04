import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useFormContext, Controller } from "react-hook-form";
import { InputProps } from './InputProps';

export const InputDropDown: React.FC<InputProps> = ({
  name,
  control,
  label,
  options,
}) => {
  const generateSingleOptions = () => {
    return options.map((option: any) => {
      return (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      );
    });
  };

  return (
    <FormControl size={"small"}>
      <InputLabel>{label}</InputLabel>
      <Controller
        render={({ field: { onChange, value } }) => (
          <Select onChange={onChange} value={value}>
            {generateSingleOptions()}
          </Select>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
};