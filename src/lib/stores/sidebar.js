import { writable } from 'svelte/store';

// Initial state: sidebar is closed
export const sidebarOpen = writable(false);
