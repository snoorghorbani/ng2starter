import { trigger, state, animate, transition, style } from '@angular/animations';
import { AnimationEntryMetadata } from '@angular/core';

export const fadeInAnimation : AnimationEntryMetadata=
    trigger('fadeInAnimation', [
        // route 'enter' transition
        transition('*=>void', [

            // styles at start of transition
            style({ opacity: 0 }),

            // animation and styles at end of transition
            animate('.3s', style({ opacity: 1 }))
        ]),
    ]);