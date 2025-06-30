import { BaseFormData, GenericFormContext } from '@/types/form'
import { Context, useContext } from 'react'
import { TextField, TextFieldProps } from '@mui/material'

type Props<T extends BaseFormData> = {
  label: keyof T
  ctx: Context<GenericFormContext<T>>
}
const ControlledInput = <T extends BaseFormData>({ label, ctx }: Props<T>) => {
  const { data, handleChange, validationErrors } = useContext(ctx)
  const error = validationErrors.find((e) => e.label === label)

  const props: TextFieldProps = {
    error: !!error,
    helperText: !!error ? error.message : '',
    onChange: handleChange(label),
    value: data[label],
  }

  switch (label) {
    case 'name':
      props.label = 'Name'
      props.required = true
      props.autoComplete = 'name'
      break
    case 'email':
      props.label = 'Email'
      props.required = true
      props.type = 'email'
      props.autoComplete = 'email'
      break
    case 'company':
      props.label = 'Unternehmen'
      props.autoComplete = 'organization'
      break
    case 'position':
      props.label = 'Job/Position'
      props.autoComplete = 'organization-title'
      break
  }

  return <TextField {...props} />
}

export default ControlledInput
