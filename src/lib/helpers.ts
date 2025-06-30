export const toKebabBlock = (input: string): string => {
  return input
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2') // camelCase → kebab
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2') // PascalCase → kebab
    .toLowerCase()
}

export const splitArrayIntoChunks = <T>(array: T[], parts: number): T[][] => {
  if (parts <= 0) throw new Error('parts must be greater than 0')

  const result: T[][] = []
  const chunkSize = Math.ceil(array.length / parts)

  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize))
  }

  return result
}

export const generateToken = () => crypto.randomUUID()
