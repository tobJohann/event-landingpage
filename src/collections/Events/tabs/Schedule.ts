import { Tab } from 'payload'
import { buttonGroup } from '@/fields/buttonGroup'

export const Schedule: Tab = {
  label: 'Schedule',
  name: 'schedule',
  interfaceName: 'EventSchedule',
  fields: [
    {
      name: 'days',
      type: 'array',
      fields: [
        { name: 'name', type: 'text', required: true },
        {
          name: 'date',
          type: 'date',
          required: true,
          admin: {
            date: {
              pickerAppearance: 'dayOnly',
              displayFormat: 'dd. MMM yy',
            },
          },
        },
        {
          name: 'timeline',
          type: 'array',
          required: true,
          minRows: 1,

          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'start',
                  type: 'date',
                  required: true,
                  admin: {
                    date: {
                      pickerAppearance: 'timeOnly',
                      displayFormat: 'HH:mm',
                      timeFormat: 'HH:mm',
                      timeIntervals: 5,
                    },
                  },
                },
                {
                  name: 'end',
                  type: 'date',
                  required: true,

                  admin: {
                    date: {
                      pickerAppearance: 'timeOnly',
                      displayFormat: 'HH:mm',
                      timeFormat: 'HH:mm',
                      timeIntervals: 5,
                    },
                  },
                },
              ],
            },

            { name: 'headline', type: 'text', required: true },
            { name: 'text', type: 'textarea' },
            buttonGroup(),
          ],
        },
      ],
    },
  ],
}
