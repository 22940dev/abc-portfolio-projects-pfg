import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export function BasicPage(props: {
  title: string, 
  meta_desc: string,
  parent: {href: string, name: string},
  children: React.ReactNode,
  filename: string,
}) {
  return <>
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.meta_desc} />
    </Head>
    <header class="bg-gradient-to-r from-purple-500 via-blue-400 to-blue-400">
      <div class="px-4 py-4 flex flex-col sm:flex-row">
        <Link href={props.parent.href}><a class="flex-1 text-white hover:underline flex justify-items-start items-center">&lt; {props.parent.name}</a></Link>
        <h1 class="flex-0 w-max text-4xl font-bold text-red-700 flex justify-items-start items-center">{props.title}</h1>
        <div class="flex-1 flex justify-items-start items-center"></div>
      </div>
    </header>
    <div class="bg-gray-300 min-h-screen">
      <div class="max-w-screen-lg mx-auto">
        <div class="p-4">
          {props.children}
        </div>
      </div>
    </div>
    <footer class="bg-gray-600 text-white">
      <div class="max-w-screen-lg mx-auto">
        <div class="p-4">
          <a href={"https://github.com/22940dev/22940dev.github.com/blob/main"+props.filename} target="_blank" rel="noreferrer noopener" class="underline">Source</a> ·{" "}
          <a href={"https://github.com/22940dev/22940dev.github.com/edit/main"+props.filename} target="_blank" rel="noreferrer noopener" class="underline">Edit</a>
        </div>
      </div>
    </footer>
  </>;
}
