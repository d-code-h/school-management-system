import Announcements from '@/components/Announcements';
import AttendanceChartContainer from '@/components/AttendanceChartContainer';
import CountChartContainer from '@/components/CountChartContainer';
import EventCalendarContainer from '@/components/EventCalendarContainer';
import FinanceChart from '@/components/FinanceChart';
import UserCard from '@/components/UserCard';
import React from 'react';

type SearchParams = Promise<{ [key: string]: string | undefined }>;

const AdminPage = async (props: { searchParams: SearchParams }) => {
  const searchParams = await props.searchParams;
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* Left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* User Card */}
        <div className="flex gap-4 justify-between flex-wrap">
          {/* User card */}
          <UserCard type="admin" />
          <UserCard type="teacher" />
          <UserCard type="student" />
          <UserCard type="parent" />
        </div>
        {/* Middle Charts */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* Count Chart */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChartContainer />
          </div>
          {/* Attendance Chart */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChartContainer />
          </div>
        </div>
        {/* Bottom Charts */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      {/* Right Side */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendarContainer searchParams={searchParams} />

        {/* Announcements for Admin */}
        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;
