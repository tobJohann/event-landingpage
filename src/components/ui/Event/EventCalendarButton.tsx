'use client'

import { Event } from '@/payload-types'
import { Button } from '@mui/material'
import { format } from 'date-fns'

type Props = {
  event: Event
}

const EventCalendarButton: React.FC<Props> = ({ event }) => {
  const handleDownload = () => {
    const startDate = format(event.eventDate, "yyyyMMdd'T'HHmmss'Z'")
    const endDate = format(event.eventEnd, "yyyyMMdd'T'HHmmss'Z'")

    const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${event.name}
DTSTART:${startDate}
DTEND:${endDate}
DESCRIPTION:${event.eventDescription}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR
  `.trim()

    const blob = new Blob([icsContent], { type: 'text/calendar' })
    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = `${event.name.replaceAll(' ', '_')}.ics`
    a.click()
    URL.revokeObjectURL(url)
  }
  return (
    <Button variant={'contained'} onClick={handleDownload}>
      Termin in Kalender speichern
    </Button>
  )
}
export default EventCalendarButton
