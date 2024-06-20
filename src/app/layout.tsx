// src/app/layout.tsx
import './globals.css';
import { CartProvider } from './context/CartContext';
import React from 'react';
import { ThemeProvider } from './theme/themeContext';
import CustomText from './theme/fontContext';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
        <CartProvider>
          {children}
        </CartProvider>
        </ThemeProvider>
       
      </body>
    </html>
  );
};

export default RootLayout;
