import React from 'react';

type ButtonType = {
  label: string;
};
export function Button({ label }: ButtonType) {
  return (
    <button className="bg-blue text-white shadow-[9px_21px_46px_7px_rgba(0,0,0,0.71)] px-4 py-2 text-[48px]">
      {label}
    </button>
  );
}
