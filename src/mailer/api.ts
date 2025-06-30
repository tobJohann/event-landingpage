import axios from 'axios'

const { BREVO_API_KEY } = process.env

export const mailerApi = axios.create({
  baseURL: 'https://api.brevo.com/v3',
  headers: {
    'Content-Type': 'application/json',
    'api-Key': BREVO_API_KEY,
  },
})
