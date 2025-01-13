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

declare interface EventType {
  id: number;
  title: string;
  description: string;
  startTime: Date;
  endTime: Date;
  classId: number;
}

declare interface Announcement {
  title: string;
  description: string;
  date: Date;
  classId: number;
}

declare interface StudentsType {
  id: string;
  username: string;
  name: string;
  surname: string;
  email: string;
  phone: string;
  address: string;
  bloodType: string;
  sex: 'Male' | 'Female';
  parentId: string;
  gradeId: number;
  classId: number;
  birthday: Date;
}
