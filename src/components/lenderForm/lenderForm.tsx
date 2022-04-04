import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Typography } from '@mui/material';

// @components
import { InputText, InputRadio, InputDate, InputCheckBox, InputDropdown } from './form/index'

// @utils
import formatFieldsData from 'src/utils/formatFieldsData';

// @styles
import { PaperStyled } from './lenderForm.styled';


interface FormInput {
  textValue: string;
  radioValue: string;
  checkboxValue: string[];
  dateValue: Date;
  dropdownValue: string;
}

const defaultValues = {
  textValue: "",
  radioValue: "",
  checkboxValue: [],
  dateValue: new Date(),
  dropdownValue: "",
};

interface lenderData {
    fields: Array<"">,
    name: String
} 

const LenderForm = (props: lenderData) => {

  const methods = useForm<FormInput>({ defaultValues: defaultValues });
  const { handleSubmit, reset, control, setValue, watch } = methods;
  const onSubmit = (data: FormInput) => console.log(data);

  const Input = ({ value, onChange, type, ...rest }) => {
    switch (type) {
      case "text":
        return null;
      case "radio":
        return rest?.options.map((e) => console.log(e));
      case "dropdown":
        return (
          <DropDownListComponent
            dataSource={rest?.options}
            select={({ itemData }) => {
              onChange(itemData.value);
            }}
            value={value}
          />
        );
  
      case "checkbox":
        return (
          <CheckBoxComponent
            label={rest?.checkboxLabel}
            onChange={(e) => onChange(e.target.checked)}
            checked={value}
          />
        );
  
      default:
        return null;
    }
  };
  // const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  const { fields, name } = props;
  const lenderBankName = name;
  const inputFieldsObj = {
    ...props
  };

  const mappedFields = formatFieldsData(inputFieldsObj);
  console.log(mappedFields);
  const getFormInputFields = !!fields && fields.map((element, index) => {
    const { name, required, type } = element;
    
    return (
      <section key={`${element}_${index}`}>
        <label>{lenderBankName}</label>
        <Controller
          name={element}
          control={control}
          rules={{required}}
          defaultValue={''}
          render={({ field }) => (
            <div>
              <Input
                value={field.value}
                onChange={field.onChange}
                {...element}
              />
            </div>
          )}
        />
      </section>
    )
    
  })
  return (
    <PaperStyled>
      <Typography variant="h6"> Form Demo</Typography>
      <InputText name="textValue" control={control} label="Text Input" />
      <InputRadio
        name={"radioValue"}
        control={control}
        label={"Radio Input"}
      />
      <InputDropDown
        name="dropdownValue"
        control={control}
        label="Dropdown Input"
      />
      <InputDate name="dateValue" control={control} label="Date Input" />
      <InputCheckBox
        control={control}
        setValue={setValue}
        name={"checkboxValue"}
        label={"Checkbox Input"}
      />
      <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
        {" "}
        Submit{" "}
      </Button>
      <Button onClick={() => reset()} variant={"outlined"}>
        {" "}
        Reset{" "}
      </Button>
    </PaperStyled>
  );
}

export default LenderForm;