"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
