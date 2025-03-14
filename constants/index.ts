export const menuItems = [
  {
    title: 'MENU',
    items: [
      {
        icon: '/home.png',
        label: 'Home',
        href: '/',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: '/teacher.png',
        label: 'Teachers',
        href: '/list/teachers',
        visible: ['admin', 'teacher'],
      },
      {
        icon: '/student.png',
        label: 'Students',
        href: '/list/students',
        visible: ['admin', 'teacher'],
      },
      {
        icon: '/parent.png',
        label: 'Parents',
        href: '/list/parents',
        visible: ['admin', 'teacher'],
      },
      {
        icon: '/subject.png',
        label: 'Subjects',
        href: '/list/subjects',
        visible: ['admin'],
      },
      {
        icon: '/class.png',
        label: 'Classes',
        href: '/list/classes',
        visible: ['admin', 'teacher'],
      },
      {
        icon: '/lesson.png',
        label: 'Lessons',
        href: '/list/lessons',
        visible: ['admin', 'teacher'],
      },
      {
        icon: '/exam.png',
        label: 'Exams',
        href: '/list/exams',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: '/assignment.png',
        label: 'Assignments',
        href: '/list/assignments',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: '/result.png',
        label: 'Results',
        href: '/list/results',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: '/attendance.png',
        label: 'Attendance',
        href: '/list/attendance',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: '/calendar.png',
        label: 'Events',
        href: '/list/events',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: '/message.png',
        label: 'Messages',
        href: '/list/messages',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: '/announcement.png',
        label: 'Announcements',
        href: '/list/announcements',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
    ],
  },
  {
    title: 'OTHER',
    items: [
      {
        icon: '/profile.png',
        label: 'Profile',
        href: '/profile',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: '/setting.png',
        label: 'Settings',
        href: '/settings',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: '/logout.png',
        label: 'Logout',
        href: '/logout',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
    ],
  },
];

// Finance Data
export const FinanceData = [
  {
    name: 'Jan',
    income: 4000,
    expense: 2400,
  },
  {
    name: 'Feb',
    income: 3000,
    expense: 1398,
  },
  {
    name: 'Mar',
    income: 2000,
    expense: 9800,
  },
  {
    name: 'Apr',
    income: 2780,
    expense: 3908,
  },
  {
    name: 'May',
    income: 1890,
    expense: 4800,
  },
  {
    name: 'Jun',
    income: 2390,
    expense: 3800,
  },
  {
    name: 'Jul',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'Aug',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'Sep',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'Oct',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'Nov',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'Dec',
    income: 3490,
    expense: 4300,
  },
];

// Attendance Logic
const getRandomWeekday = () => {
  const start = new Date('2025-01-01');
  const end = new Date('2025-12-31');

  let randomDate;

  do {
    const timeDiff = end.getTime() - start.getTime();
    const randomTime = start.getTime() + Math.random() * timeDiff;
    randomDate = new Date(randomTime);
  } while (randomDate.getDay() === 0 || randomDate.getDay() === 6); // Exclude Sunday (0) and Saturday (6)

  return randomDate;
};
const attendances: Attendance[] = [];
for (let i = 1; i <= 10; i++) {
  attendances.push({
    date: getRandomWeekday(),
    present: [true, false][Math.floor(Math.random() * 2)],
    studentId: `student${i}`,
    lessonId: (i % 30) + 1,
  });
}

// Event Logic
const events: EventType[] = [];
for (let i = 1; i <= 5; i++) {
  events.push({
    id: i,
    title: `Event ${i}`,
    description: `Description for Event ${i}`,
    startTime: new Date(new Date().setHours(new Date().getHours() + 1)),
    endTime: new Date(new Date().setHours(new Date().getHours() + 2)),
    classId: (i % 5) + 1,
  });
}

// Announcement logic
const announcements: Announcement[] = [];

for (let i = 1; i <= 5; i++) {
  announcements.push({
    title: `Announcement ${i}`,
    description: `Description for Announcement ${i}`,
    date: new Date(),
    classId: (i % 5) + 1,
  });
}

// Student dummy details
const students: StudentsType[] = [];
const bloodType = ['O+', 'O-', 'A+', 'B+', 'AB', 'A-', 'B-'];
for (let i = 1; i <= 50; i++) {
  students.push({
    id: `student${i}`,
    username: `student${i}`,
    name: `SName${i}`,
    surname: `SSurname ${i}`,
    email: `student${i}@example.com`,
    phone: `987-654-321${i}`,
    address: `Address${i}`,
    bloodType: bloodType[Math.floor(Math.random() * 7)],
    sex: i % 2 === 0 ? 'Male' : 'Female',
    parentId: `parentId${Math.ceil(i / 2) % 25 || 25}`,
    gradeId: (i % 6) + 1,
    classId: (i % 6) + 1,
    birthday: new Date(new Date().setFullYear(new Date().getFullYear() - 10)),
  });
}

// Lessons dummy content
// const lessons = [];
// for (let i = 1; i <= 30; i++) {
//   lessons.push({
//     name: `Lesson${i}`,
//     day: Day[
//       Object.keys(Day)[
//         Math.floor(Math.random() * Object.keys(Day).length)
//       ] as keyof typeof Day
//     ],
//     startTime: new Date(new Date().setHours(new Date().getHours() + 1)),
//     endTime: new Date(new Date().setHours(new Date().getHours() + 3)),
//     subjectId: (i % 10) + 1,
//     classId: (i % 6) + 1,
//     teacherId: `teacher${(i % 15) + 1}`,
//   });
// }

export { attendances, events, announcements, students };
