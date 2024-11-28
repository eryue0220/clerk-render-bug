'use client';

import { OrganizationSwitcher, UserButton } from '@clerk/nextjs';
import type { ReactNode } from 'react';

export function Layout({ children }: { children: ReactNode; }) {
  return (
    <div>
      <div>
        <OrganizationSwitcher />
        <UserButton />
      </div>
      {children}
    </div>
  );
}
