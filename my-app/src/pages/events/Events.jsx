import React from 'react'
import Card from '../Cards'

export function Events() {
    return (
        <div>
             <Card
            title='event A'
            images='./pages/images/event.jpg'
            old_price='9,999'
            newPrice='99'
            rupess='$'
            alt='event'
            exp_date='25-10-2020'
          />
          <Card
            title='event B'
            images='./pages/images/event.jpg'
            old_price='20'
            newPrice='10'
            rupess='$'
            alt='event'
            exp_date='25-10-2020'
          />
        </div>
    )
}

export default Events
