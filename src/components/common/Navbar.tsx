import { navbarConfig } from '@/config/Navbar';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';

import Container from './Container';


export default function Navbar() {
  return (
    <Container
      className="
        sticky top-0 z-20
        rounded-xl
        py-4

        backdrop-blur-md
        bg-background/70

        /* quiet 3D lift */
        shadow-[0_1px_2px_rgba(0,0,0,0.06)]
        dark:shadow-[0_1px_2px_rgba(0,0,0,0.5)]

        /* premium border */
        border border-border/40

        /* subtle highlight sheen */
        before:absolute before:inset-0 before:rounded-xl
        before:p-[1px] before:content-['']
        before:bg-gradient-to-br
        before:from-black/5 before:via-transparent before:to-black/5
        dark:before:from-white/10 dark:before:via-transparent dark:before:to-white/10
        before:pointer-events-none

        relative
      "
    >
      <div className="flex items-center justify-between px-6">
        {/* Left */}
        <div className="flex items-baseline gap-5">
          <Link href="/">
            <Image
              className="
                h-16 w-16 rounded-lg

                border border-border/60
                

                shadow-[0_1px_1px_rgba(0,0,0,0.08)]
                dark:shadow-[0_1px_1px_rgba(0,0,0,0.8)]

                transition-all duration-300 ease-out
                hover:shadow-md

                bg-[#120D2A]
              "
              src={navbarConfig.logo.src}
              alt={navbarConfig.logo.alt}
              width={navbarConfig.logo.width}
              height={navbarConfig.logo.height}
            />
          </Link>

          <nav className="flex items-center gap-5">
            {navbarConfig.navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="
                  relative text-xl font-medium

                  text-foreground/80
                  transition-colors duration-200

                  hover:text-foreground

                  after:absolute after:left-0 after:-bottom-1
                  after:h-px after:w-0
                  after:bg-foreground/60
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          {/* <ThemeToggleButton variant="circle" start="top-right" blur /> */}
        </div>
      </div>
    </Container>
  );
}
