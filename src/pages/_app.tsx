import "@/styles/globals.css";

import { ClerkProvider, SignedIn, SignInButton,SignedOut,UserButton } from "@clerk/nextjs";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { trpc } from "@/context/trpc-provider";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
    <ClerkProvider {...pageProps}>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <Component {...pageProps} />
    </ClerkProvider>
    </ThemeProvider>
  );
}

// @ts-ignore
export default trpc.withTRPC(App);
