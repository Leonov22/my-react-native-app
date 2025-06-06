import { onAuthStateChanged } from '@/src/services/authNative';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { Redirect, Stack, usePathname } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';

export default function RootLayout() {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [initializing, setInitializing] = useState(true);
  const pathname = usePathname();          // - поточний маршрут
  const inAuth = pathname.startsWith('/login') || pathname.startsWith('/signup');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((user) => {
      setUser(user);
      if (initializing) setInitializing(false);
    });
    
    return unsubscribe; // Cleanup subscription on unmount
  }, [initializing]);

  console.log('[Root]', { initializing, user });

  if (initializing) return null;

  if (!user && !inAuth) {
    return <Redirect href="/login" as any />;
  }

  if (user && inAuth) {
    // залогінились, а залишилися на /login - повернути в таби
    return <Redirect href="/" as any />;
  }

  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#fff' }
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
