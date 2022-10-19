import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';

const Date = () => {


  const date = DateTime.now().setLocale('en').toLocaleString(DateTime.DATE_MED);

  return (
    <div>
      <p className="date">{date}</p>
    </div>
  );
};

export default Date;