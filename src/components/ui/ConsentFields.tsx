import { Box, Checkbox, Collapse, Typography } from '@mui/material'
import MuiFormControlLabel from '@mui/material/FormControlLabel'
import { ReactNode } from 'react'

type ConsentProps = {
  value: boolean
  onChange: (newValue: boolean) => void
  error: boolean
  errorText?: string
}

const ConsentField = ({ data, label }: { data: ConsentProps; label: string | ReactNode }) => {
  return (
    <MuiFormControlLabel
      sx={{ alignItems: 'flex-start' }}
      //@ts-ignore
      onChange={(e) => data.onChange(e.target.checked)}
      control={<Checkbox checked={data.value} />}
      label={
        <Box mt={0.5}>
          {label}
          {data.errorText && (
            <Collapse in={data.error} mountOnEnter unmountOnExit>
              <Box my={1.5}>
                <Typography variant={'body2'} color={'error.main'}>
                  {data.errorText}
                </Typography>
              </Box>
            </Collapse>
          )}
        </Box>
      }
    />
  )
}

export default ConsentField
