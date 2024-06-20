'use client'
import { useTheme } from './themeContext';

type CustomTextProps = {
  children: React.ReactNode;
};

const CustomText = ({ children }: CustomTextProps) => {
  const { theme } = useTheme();

  return (
    <p className={`text-base ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
      {children}
    </p>
  );
};

export default CustomText;
