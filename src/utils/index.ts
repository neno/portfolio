import clsx, {ClassValue} from "clsx";
import {twMerge} from "tailwind-merge";

export const fluid = (minSize: number, maxSize: number, minBreakpoint = 375, maxBreakpoint = 1440, unit = 'rem') => {
  const slope = (maxSize - minSize) / (maxBreakpoint - minBreakpoint);
  const base = minSize - slope * minBreakpoint;

  return `clamp(${toUnit(minSize, unit)}, ${toUnit(base, unit)} + ${slope * 100}vw, ${toUnit(maxSize, unit)})`;
}

export const toUnit = (value: number, unit: string) => {
  if (unit === 'rem') {
    return rem(value);
  }
  return `${value}${unit}`;
}

export const lineHeight = (lineHeight: number, fontSize: number) => {
  const value = lineHeight / fontSize;
  return Number(value.toFixed(4));
}


export const rem = (value: number) => {
  return `${value / 16}rem`;
}

export const cn = (...inputs: ClassValue[]) => (
  twMerge(clsx(inputs))
)