'use server';

import {cookies} from 'next/headers';
const COOKIE_NAME = 'saLang';

export async function getUserLocale() {
  return cookies().get(COOKIE_NAME)?.value || null;
}

export async function setUserLocale(locale) {
  cookies().set(COOKIE_NAME, locale);
  return true;
}