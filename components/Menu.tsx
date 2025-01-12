import { menuItems } from '@/constants';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Menu = async () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((each) => (
        <div className="flex flex-col gap-2" key={each.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {each.title}
          </span>
          {each.items.map((item) => {
            // if (item.visible.includes(role)) {
            return (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-SkyLight"
              >
                <Image src={item.icon} alt="" width={20} height={20} />
                <span className="hidden lg:block">{item.label}</span>
              </Link>
            );
            // }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
