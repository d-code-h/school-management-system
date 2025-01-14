import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

const UserCard = ({ type }: { type: UserCardType }) => {
  const colors = {
    teacher: 'bg-Yellow',
    student: 'bg-Sky',
    parent: 'bg-blue-300',
    admin: 'bg-Purple',
  };
  return (
    <div
      className={clsx(`rounded-2xl
       p-4 flex-1 min-w-[130px] ${colors[type]}`)}
    >
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          2024/25
        </span>
        <Image src="/more.png" alt="" width={20} height={20} />
      </div>
      <h1 className="text-2xl font-semibold my-4">20</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">{type}s</h2>
    </div>
  );
};

export default UserCard;
