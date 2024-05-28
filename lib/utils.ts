import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import moment from 'moment';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function capitalizeEachWord(str: string) {
  let words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
}

export function formatDate(dateString: string) {
  // Parse the string date using Moment.js
  const date = moment(dateString);
  // Format the date as "DD MMMM, YYYY"
  const formattedDate = date?.format('DD MMMM, YYYY');
  return formattedDate;
}

export const formatRelativeTime = (date: string): string => {
  return moment(date).fromNow();
};

export function formatPrice(price: number): string {
  // Convert price to string and split it into whole and decimal parts
  const parts = price?.toFixed(2)?.split(".");
  const wholePart = parts[0];
  const decimalPart = parts[1];

  // Format whole part with commas
  const formattedWholePart = wholePart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Construct the formatted price string
  const formattedPrice = `₹ ${formattedWholePart}.${decimalPart}`;

  return formattedPrice;
}

export function validateIndianPhoneNumber(phoneNumber: string) {
  // Regular expression for Indian phone numbers
  const phoneRegex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;
  // Test the provided phone number against the regex
  return phoneRegex.test(phoneNumber);
}

export function replaceNewLinesWithBr(inputString: string) {
  return inputString.split('\n').map((line: string) => line.trim()).join('<br />');
}