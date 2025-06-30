import { Tab } from 'payload'

export const General: Tab = {
  label: 'General',
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'location', type: 'text', required: true },
    {
      name: 'address',
      type: 'text',
      admin: {
        description: 'separate lines with ;',
      },
    },
    {
      name: 'eventDate',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
          displayFormat: 'dd. MMM yy, HH:mm',
          timeFormat: 'HH:mm',
        },
      },
    },
    {
      name: 'eventEnd',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
          displayFormat: 'dd. MMM yy, HH:mm',
          timeFormat: 'HH:mm',
        },
      },
    },
  ],
}
