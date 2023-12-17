'use client'
import {Menu} from './components/menu'
import {Plen} from './components/plen'
import {Person} from './components/person'
import {Member} from './components/member'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <Menu/>
    {// <Plen/>
    }
    <Person name="Imie" surname="Nazwisko" caption="podpis"/>
    <Member name="Imie" surname="Nazwisko" caption="podpis" desc="Opis osoby"/>
    </>
  )
}
