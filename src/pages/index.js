import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import profilePic from "../../public/images/profile/profile_1.png"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"
import TransitionEffect from '@/components/TransitionEffect'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="MykytaM`s Portfolio" content="Another step in long and productive road." />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:p-16 sm:pt-8'>
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt="Mykyta's photo" className='w-full h-auto lg:hidden md:inline-block md:w-full'
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl' />
              <p className='mt-4 mb-2 text-base font-medium md:text-small sm:text-sm'>
                Frontend developer in JavaScript, React, and Redux with a strong focus on creating engaging and user-friendly graphical user interfaces.</p>
              <p className='mb-4 mb-2 lg:my-2 text-base font-medium md:text-small sm:text-sm'>Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>

              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/MusaievMykytaCV.pdf" target={'_blank'}
                  className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                dark:bg-light dark:text-dark hover:dark:text-light hover:dark:bg-dark hover:dark:border-light
                md:p-2 md:px-4 md:text-base'
                  download={true}
                >Resume<LinkArrow className={"w-6 ml-1"} />
                </Link>
                {/* TODO замінити на форму контакту сформовану в модалці з тейлвіндом і бібліотекою стану відправки. бібліотека для зв'язку EmailJS; Для тосту React Hot Toast */}
                <Link href="mailto:n.musaiev@gmail.com" target={'_blank'}
                  className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light
                  md:text-base'
                >Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image src={lightBulb} alt="MykytaM" className='w-full h-full'></Image>
        </div>
      </main>
    </>
  )
}
