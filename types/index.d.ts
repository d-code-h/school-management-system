declare type UserCardType = 'admin' | 'teacher' | 'student' | 'parent';

declare interface AttendanceChartProps {
  name: string;
  present: number;
  absent: number;
}

declare interface Attendance {
  date: Date;
  present: boolean;
  studentId: string;
  lessonId: number;
}
