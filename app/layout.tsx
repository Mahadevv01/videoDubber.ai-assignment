"use client"
import '@mantine/core/styles.css';
import React from 'react';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import { NavbarMinimal } from '@/components/sidebar/NavbarMinimal';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <div style={{ display: 'flex', backgroundColor:"#121212", color:"white" }}>
            <div style={{ width: '6%' }}>
              <NavbarMinimal /> 
            </div>
            <div style={{ width: '94%', padding: '1rem' }}>
              {children}
            </div>
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}
