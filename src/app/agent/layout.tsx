'use client';

import { ReactNode } from 'react';

interface AgentLayoutProps {
  children: ReactNode;
}

export default function AgentLayout({ children }: AgentLayoutProps) {
  // Clean layout for agent routes - no header, footer, or chat widget
  return <>{children}</>;
}

