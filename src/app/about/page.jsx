import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target="_blank"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Liam Marincik, a Denver-based innovator merging technology and creativity to forge impactful solutions and experiences.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I’m Liam Marincik, a Denver-based innovator merging technology and
            creativity.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              From the Ballfield to Bytes: A Journey Through Heart and Hard
              Drives
            </p>
            <p>
              Growing up, the crack of the bat and the cheer of the crowds were
              the melodies of my youth. Baseball wasn't just a game for me; it
              was a passionate pursuit where I learned about teamwork,
              discipline, and the joy of a well-played inning. I spent countless
              hours on the diamond, honing my skills and dreaming of one day
              making it big. The field was where I felt most alive, where every
              stolen base and home run added chapters to the thrilling story of
              my life. But as I grew older, a twist of fate presented itself in
              the form of a heart condition. The very organ that pumped with
              excitement for the game now dictated a new set of rules—no more
              baseball.
            </p>
            <p>
              This setback might have derailed my spirits, but I found refuge in
              another world entirely—the digital realm of computers. Here, there
              were no benches I was relegated to, no sidelines to watch from. In
              the language of codes and the art of virtual creation, I
              discovered a new playing field. I immersed myself in learning the
              intricacies of software, the potential of programming, and the
              boundless possibilities of digital creation. It was an empowering
              realization that my potential wasn't limited to physical
              endeavors; my mind was just as capable of hitting home runs in the
              realm of technology and innovation.
            </p>
            <p>
              The discovery of flight simulation games opened yet another avenue
              for my aspirations. The thrill of soaring through virtual skies
              was exhilarating, offering an escape and a challenge all at once.
              It was a bittersweet discovery, though, as I soon understood that
              the pilot's license I dreamt of was beyond my reach due to my
              medical condition. Undeterred, I plunged deeper into the heart of
              computing, learning to build PCs from scratch and bringing them to
              life. It was in the whirring of fans and the glow of monitors that
              I found my calling. As I mapped out motherboards and orchestrated
              operating systems, a future in IT and software design beckoned to
              me, promising a world where my passion and skills could thrive
              unchecked by the limitations of my physical world.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://github.com/Coderinsightmaven"
              target="_blank"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/liam-marincik-49ba54212/"
              icon={LinkedInIcon}
              className="mt-4"
              target="_blank"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:lmarincik@proton.me"
              target="_blank"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              lmarincik@proton.me
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
