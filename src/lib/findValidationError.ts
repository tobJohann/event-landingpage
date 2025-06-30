import { ZodIssue } from 'zod'

export const findValidationError = (errors: ZodIssue[], path: (string | number)[]) => {
  return errors.find((issue) => {
    if (!Array.isArray(issue.path)) return false
    if (issue.path.length !== path.length) return false
    return issue.path.every((part, i) => part === path[i])
  })
}
