import Announcements from '@/components/Announcements';
import BigCalendarContainer from '@/components/BigCalendarContainer';
// import { students } from '@/constants';
import React from 'react';

const ParentPage = () => {
  return (
    <div className="flex-1 p-4 flex gap-4 flex-col xl:flex-row">
      {/* Left */}
      <div className="w-full xl:w-2/3">
        {/* {students.map((student) => ( */}
        <div className="w-full xl:w-2/3">
          {/* <div className="w-full xl:w-2/3" key={student.id}> */}
          <div className="h-full bg-white p-4 rounded-md">
            <h1 className="text-xl font-semibold">
              Schedule John Doe
              {/* Schedule ({student.name + ' ' + student.surname}) */}
            </h1>
            <BigCalendarContainer />
          </div>
        </div>
        {/* ))} */}
      </div>

      {/* Right Aside */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Announcements />
      </div>
    </div>
  );
};

export default ParentPage;
