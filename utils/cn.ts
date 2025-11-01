import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

type Params = ClassValue[];

export const cn = (params: Params) => {
  return twMerge(clsx(params));
};
