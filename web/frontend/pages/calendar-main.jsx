/*Author: Nicolas Pippo*/
/* This file is for the main calendar view. It will only draw the calendar meaning displaying 
the current month, the days and allowing for going to the next month. This uses the preexisting 
react-calendar which is licensed under MIT license*/

import {
    Card,
    EmptyState,
    Layout,
    Page,
    SkeletonBodyText,
  } from "@shopify/polaris";
import React, { useState } from 'react';
import Calendar from 'react-calendar';
//import 'react-calendar/dist/Calendar.css';
import './calendar.css'

export default function calendarView()
{
   const [value,onChange] = useState(new Date());
    
   return( 
    <Page>

    {/* <Card sectioned> */}
           <Calendar onChange={onChange} value={value}/>
    {/* </Card> */}
    </Page>
    );
    
    
}