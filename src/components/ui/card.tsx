import { cn } from '@/lib/utils';
import * as React from 'react';

function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card"
      className={cn(
        `
        relative flex flex-col gap-6 rounded-xl py-6
        bg-card text-card-foreground
        border border-border/60
        shadow-sm

        /* premium effects */
        before:absolute before:inset-0 before:rounded-xl
        before:p-[1px] before:content-['']
        before:bg-gradient-to-br
        before:from-black/5 before:via-transparent before:to-black/5
        dark:before:from-white/10 dark:before:via-transparent dark:before:to-white/10
        before:pointer-events-none

        after:absolute after:inset-0 after:rounded-xl after:content-['']
        after:shadow-[0_0_0_1px_rgba(0,0,0,0.04)]
        dark:after:shadow-[0_0_0_1px_rgba(255,255,255,0.06)]
        after:pointer-events-none

        transition-all duration-300
        hover:shadow-md
        `,
        className,
      )}
      {...props}
    />
  );
}


function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        `
        relative
        @container/card-header
        grid auto-rows-min grid-rows-[auto_auto]
        items-start gap-1.5 px-6
        has-data-[slot=card-action]:grid-cols-[1fr_auto]
        [.border-b]:pb-6

        /* subtle premium divider */
        

        /* soft material highlight */
        before:absolute before:inset-x-0 before:top-0 before:h-px
        before:bg-gradient-to-r
        before:from-transparent before:via-black/5 before:to-transparent
        dark:before:via-white/10
        before:pointer-events-none

        /* ultra-light inner glow */
        after:absolute after:inset-0 after:content-['']
        after:shadow-[inset_0_-1px_0_rgba(0,0,0,0.04)]
        dark:after:shadow-[inset_0_-1px_0_rgba(255,255,255,0.06)]
        after:pointer-events-none
        `,
        className,
      )}
      {...props}
    />
  );
}


function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        `
        leading-tight
        font-semibold
        tracking-[-0.01em]

        text-foreground
        antialiased

        /* subtle depth without glow */
        [text-wrap:balance]

        /* optical enhancement */
        bg-clip-text
        `,
        className,
      )}
      {...props}
    />
  );
}


function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-description"
      className={cn(
        `
        text-sm
        leading-relaxed
        tracking-[-0.005em]

        text-muted-foreground/90
        antialiased

        [text-wrap:pretty]

        /* subtle hierarchy control */
        max-w-prose
        `,
        className,
      )}
      {...props}
    />
  );
}


function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        `
        col-start-2 row-span-2 row-start-1
        self-start justify-self-end

        /* premium positioning */
        flex items-center gap-2
        translate-y-[1px]

        /* subtle separation */
        text-muted-foreground/80

        /* polish */
        transition-colors duration-200
        `,
        className,
      )}
      {...props}
    />
  );
}


function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-content"
      className={cn(
        `
        px-6

        /* premium vertical rhythm */
        flex flex-col gap-4

        /* readability */
        text-foreground/95
        antialiased

        /* subtle containment */
        relative
        `,
        className,
      )}
      {...props}
    />
  );
}


function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        `
        relative
        flex items-center justify-between
        px-6 pt-4

        /* subtle separation from content */
        

        /* premium spacing */
        gap-3

        /* polish */
        text-foreground/95
        antialiased
        `,
        className,
      )}
      {...props}
    />
  );
}


export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
