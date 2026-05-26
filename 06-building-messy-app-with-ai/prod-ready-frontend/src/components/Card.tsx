import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  title?: string;
}

export function Card({ children, title }: CardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      {title && (
        <div className="bg-gray-50 border-b border-gray-100 px-6 py-4">
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
}