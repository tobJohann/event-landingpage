import { Tab } from 'payload'

export const Registration: Tab = {
  label: 'Registration',
  fields: [
    {
      name: 'startRegistration',
      type: 'date',
      required: true,
      admin: {
        date: { pickerAppearance: 'dayAndTime', displayFormat: 'dd.MM.yyyy – HH.mm' },
      },
    },
    {
      name: 'endRegistration',
      type: 'date',
      required: true,
      admin: {
        date: { pickerAppearance: 'dayAndTime', displayFormat: 'dd.MM.yyyy – HH.mm' },
      },
    },
    {
      name: 'maxParticipants',
      type: 'number',
      defaultValue: 0,
      admin: { description: '0 = infinite' },
    },
  ],
}
