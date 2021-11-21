import { writable } from 'svelte/store';
import { tweened } from 'svelte/motion';
import { expoOut } from 'svelte/easing';

export const string = writable('');

export const hp = tweened(100, {
  duration: 400,
  easing: expoOut,
});

export const dp = tweened(100, {
  duration: 400,
  easing: expoOut,
});

export const ap = tweened(100, {
  duration: 400,
  easing: expoOut,
});

setInterval(() => {
  hp.set(Math.random() * 100);
  dp.set(Math.random() * 100);
  ap.set(Math.random() * 100);
}, 500);
