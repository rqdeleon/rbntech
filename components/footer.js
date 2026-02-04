"use client"
import Image from "next/image";
import { Map, PhoneIcon, MailIcon, Facebook, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon, } from '@heroicons/react/24/solid'

import Container from "@/components/container";
import ThemeSwitch from "@/components/themeSwitch";
import { useMediaQuery } from "@/hooks/use-media-query";
import { urlForImage } from "@/lib/sanity/image";


export default function Footer(props) {
  const isDesktop = useMediaQuery("(min-width:1280px)");
  const quicklinks = [
    {
      href: '/product',
      label: 'Product',
    },
    {
      href: '/about',
      label: 'About Us',
    },
    {
      href: '/about',
      label: 'How To Order',
    },
    {
      href: '/about',
      label: 'Order Bulk',
    },
  ]
  const supporlinks = [
    {
      href: '/contact',
      label: 'Contact us',
    },
    {
      href: '/about',
      label: 'Privacy Policy',
    },
    {
      href: '/about',
      label: 'Replacement Policy',
    },
    {
      href: '/about',
      label: 'Refund Policy',
    },
  ]

  const socialmedias = [
    {
      name: 'facebook',
      href: 'https://www.facebook.com/rbntechtrading/',
      icon: '/img/socials/facebook.svg',
    },
    {
      name: 'viber',
      href: `viber://contact?number=${props.phone}`,
      icon: '/img/socials/viber.svg',
    },
    {
      name: 'messenger',
      href: 'https://m.me/rbntechtrading',
      icon: '/img/socials/messenger.svg',
    },
  ]
  return (
  <footer className="bg-cyan-900 text-slate-100 pt-10">
    <Container>
      <section className="grid grid-cols-1 gap-5 xl:grid-cols-5 text-xl">
        <div className="xl:col-span-2 flex flex-col gap-y-5 lg:gap-y-7">
          {props.logo ? (
            <div className="flex gap-2 items-center justify-center lg:justify-normal w-full">
              <div className="relative w-20">
                <Image
                  {...urlForImage(props.logo)}
                  alt="Logo"
                  priority={true}
                />
              </div>
              <h3 className="block uppercase text-center text-4xl font-bold">
                {props.title}
              </h3>
            </div>
          ) : (
            <h3 className="block uppercase md:hidden lg:block text-center">
              {props.title}
            </h3>
          )}
          <div className="flex gap-3">
            <Map className="flex-none min-w-8 w-8 h-8" />
            <p className="flex-1">
              Pacita Complex 1, San Vicente 4023, San Pedro City, Philippines
            </p>
          </div>

          <div className="flex gap-3">
            <PhoneIcon className="flex-none w-7 h-7" />
            <Link href={`viber://contact?number=${props.phone}`}>
              {props.phone}
            </Link>
          </div>

          <div className="flex gap-3">
            <MailIcon className="min-w-7 w-7 h-7" />
            <Link href={`mailto:${props.email}`}>
              {props.email}
            </Link>
          </div>

          <div className="flex gap-3 text-md">
            <MailIcon className="min-w-7 w-7 h-7" />
            <Link href={`mailto:sales.rbntech@gmail.com`}>
              sales.rbntech@gmail.com
            </Link>
          </div>
        </div>

        <div className="mt-5 lg:mt-0 ">
          {isDesktop ? 
            <>
              <h3 className="block text-center text-2xl font-bold">
                Quick Links
              </h3>
              <ul className="mt-12 flex flex-col gap-y-4">
                {
                  quicklinks.map((link, index)=>(
                    <li key={index}>
                      <Link href={link.href}>
                        {link.label}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </>
          :
            <Disclosure as="div" className="border-b-2 border-b-gray-300 border-opacity-40 pb-5">
              <Disclosure.Button className="group flex items-center gap-2 text-2xl font-semibold">
                  Quick Links
                <ChevronDownIcon className="w-5 group-data-[open]:rotate-180" />
              </Disclosure.Button>
              <Disclosure.Panel>
                <ul className="mt-12 flex flex-col gap-y-4">
                { quicklinks.map((link, index)=>(
                    <li key={index}>
                      <Link href={link.href}>
                        {link.label}
                      </Link>
                    </li>
                ))}
                </ul>
              </Disclosure.Panel>
            </Disclosure>
          }
        </div>
          
        <div className="mt-5 lg:mt-0">
            { isDesktop ?
              <>
                <h3 className="block text-center text-2xl font-bold">
                  Support
                </h3> 
                <ul className="mt-12 flex flex-col gap-y-4">
                  {supporlinks.map((link, index)=>(
                    <li key={index}>
                      <Link href={link.href}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
              :
                <Disclosure as="div" className="border-b-2 border-b-gray-300 border-opacity-40 pb-5 transition-all duration-300 delay-200">
                  <Disclosure.Button className="group flex items-center gap-2 text-2xl font-semibold">
                      Support
                    <ChevronDownIcon className="w-5 group-data-[open]:rotate-180" />
                  </Disclosure.Button>
                  <Disclosure.Panel>
                    <ul className="mt-12 flex flex-col gap-y-4">
                    {supporlinks.map((link, index)=>(
                      <li key={index}>
                        <Link href={link.href}>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                    </ul>
                  </Disclosure.Panel>
                </Disclosure>
              }
        </div>

        <div>
          <h3 className="text-center lg:text-start text-2xl font-bold">
            Get in Touch:
          </h3> 
          <ul className="mt-7 flex gap-4 lg:mt-12">
            { socialmedias.map(
              (sm)=>(
              <li key={sm.name}>
                <Link href={sm.href} target="blank">
                  <Image 
                    src={sm.icon}
                    width={50}
                    height={50}
                    alt={sm.name} 
                    className="w-12 h-12 flex-none"/>
                </Link>
              </li>
            )
            )}
          </ul>
        </div>
      </section>
    </Container>
    <Container className="mt-10 border-t border-gray-100/40 dark:border-gray-800">
      <div className="text-center text-sm">
        Copyright © {new Date().getFullYear()} {props?.copyright}. All
        rights reserved.
      </div>
      <div className="mt-1 flex justify-center gap-1 text-center text-sm text-gray-500 dark:text-gray-600">
        <span>&middot;</span>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <div className="mt-5">
          <a
            href="https://mybranches.net"
            target="_blank"
            rel="noopener"
            className="relative block w-44">
            <Image
              src='/img/mybranches.svg'
              alt="Powered by myBranches"
              unoptimized={true}
              width="150"
              height="25"
            />
          </a>
        </div>
        <ThemeSwitch />
      </div>
    </Container>
  </footer>
  );
}

