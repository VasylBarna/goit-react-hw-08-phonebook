import React from 'react';
import { SectionApp } from './Section.styled';

export const Section = ({ title, children }) => (
  <SectionApp>
    <h2>{title}</h2>
    {children}
  </SectionApp>
);
