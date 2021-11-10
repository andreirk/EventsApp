import { Badge, Calendar } from 'antd'
import { Moment } from 'moment';
import React, { FC } from 'react'
import { IEvent } from '../models/IEvent'
import { formatDate } from '../utils/formatDate';

interface EventCalendarProps {
    events: IEvent[];
}

const EventCalendar: FC<EventCalendarProps> = (props: EventCalendarProps) => {

    function dateCellRender(value: Moment) {
        const formatedDate = formatDate(value.toDate())
        const currentDayEvents = props.events.filter(ev => ev.date === formatedDate)

        return (
          <ul >
            {currentDayEvents.map((item, index) => (
              <li key={index}>
                <div>{item.description}</div>
              </li>
            ))}
          </ul>
        );
      }

    return (
        <Calendar
        dateCellRender={dateCellRender}
        />
    )
}

export default EventCalendar
