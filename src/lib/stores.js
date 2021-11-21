import { writable } from 'svelte/store';
import { tweened } from 'svelte/motion';
import { cubicOut } from 'svelte/easing';

export const string = writable('');

export const hp = tweened(100, {
  duration: 400,
  easing: cubicOut,
});

export const mp = tweened(100, {
  duration: 400,
  easing: cubicOut,
});

setInterval(() => {
  hp.set(Math.random() * 100);
  mp.set(Math.random() * 100);
}, 1000);
