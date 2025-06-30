'use client'

import { useState } from 'react'
import { Box, Button, Stack, TextField, TextFieldProps } from '@mui/material'
import ConsentField from '@/components/ui/ConsentFields'
import { ZodError, ZodIssue } from 'zod'
import { NewsletterFormValues, newsletterSchema } from '@/lib/validation/newsletterRegisterForm'
import axios, { Axios, AxiosError } from 'axios'
import { findValidationError } from '@/lib/findValidationError'
import NewsletterFormWrapper from '@/components/forms/newsletter/NewsletterFormWrapper'

type Props = {
  withNameInput?: boolean
  btnLabel?: string
}
const defaultFormValue: NewsletterFormValues = { email: '', name: '', privacy: false }

const NewsletterForm: React.FC<Props> = ({
  withNameInput = false,
  btnLabel = 'Jetzt anmelden',
}) => {
  const [values, setValues] = useState(defaultFormValue)
  const [validationErrors, setValidationErrors] = useState<ZodIssue[]>([])
  const [formState, setFormState] = useState<'idle' | 'error' | 'loading' | 'success'>('idle')

  const handleChange = (label: keyof NewsletterFormValues, newVal: string | boolean) => {
    setValues({ ...values, [label]: newVal })
  }
  const handleSubmit = async () => {
    try {
      setFormState('loading')
      newsletterSchema.parse(values)
      await axios.post('/api/newsletter', values)
      setFormState('success')
    } catch (e) {
      console.log(e)
      if (e instanceof ZodError) {
        setValidationErrors(e.errors)
        setFormState('idle')
      } else if (e instanceof AxiosError && e.response && e.response.status === 423) {
        setValidationErrors(e.response.data.errors as ZodIssue[])
        setFormState('idle')
      } else {
        setFormState('error')
      }
    }
  }

  const getInputProps = (label: keyof NewsletterFormValues) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [label]: e.target.value })
    }

    const error = findValidationError(validationErrors, [label])

    const props: TextFieldProps = {
      fullWidth: true,
      error: !!error,
      helperText: !!error ? error.message : '',
      onChange: handleChange,
      value: values[label],
    }

    switch (label) {
      case 'name':
        props.label = 'Name'
        props.autoComplete = 'name'
        break
      case 'email':
        props.label = 'Email'
        props.required = true
        props.type = 'email'
        props.autoComplete = 'email'
        break
    }

    return props
  }
  const consentError = findValidationError(validationErrors, ['privacy'])

  return (
    <NewsletterFormWrapper state={formState}>
      <Stack
        direction={'column'}
        component={'form'}
        spacing={3}
        width={'100%'}
        sx={{
          textAlign: 'left',
        }}
      >
        {withNameInput && <TextField {...getInputProps('name')} />}
        <TextField {...getInputProps('email')} />

        <ConsentField
          data={{
            value: values.privacy,
            error: Boolean(consentError),
            errorText: consentError?.message ?? '',

            onChange: (newVal) => handleChange('privacy', newVal),
          }}
          label={'Bitte bestätigen Sie unsere Bestimmungen zum Datenschutz.'}
        />
        <Button
          onClick={(e) => {
            e.preventDefault()
            handleSubmit()
          }}
          variant={'contained'}
        >
          {btnLabel}
        </Button>
      </Stack>
    </NewsletterFormWrapper>
  )
}
export default NewsletterForm
