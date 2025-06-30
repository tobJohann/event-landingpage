export type FormState = 'idle' | 'loading' | 'success' | 'error'

export type BaseFormData = Record<string, any>

export interface ValidationError<T, TKey> {
  label: keyof T
  key: keyof TKey
  message: string
  index: number
}

export interface GenericFormContext<T extends BaseFormData> {
  data: T
  handleChange: (label: keyof T) => (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: () => Promise<void>
  validationErrors: { label: keyof T; message: string }[]
}
