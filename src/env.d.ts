/// <reference types="astro/client" />

import type { AstroGlobal } from 'astro'

declare global {
  var Astro: AstroGlobal;
}

export {}