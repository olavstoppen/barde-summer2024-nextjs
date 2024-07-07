'use client'

import { ColumnDef } from '@tanstack/react-table'

import { ArrowUpDown } from 'lucide-react'

import { ArrowRightIcon } from '@heroicons/react/24/solid'

import { Button } from '@/components/ui/button'

import { task } from '../lib/types'
import Link from 'next/link'

export const columns: ColumnDef<task>[] = [
  {
    accessorKey: 'id',
    header: ({ column }) => {
      return (
        <Button
          variant='default'
          className='text-black rounded-xl'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          ID
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      )
    }
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant='default'
          className='text-black'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Oppgave
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      )
    }
  },
  {
    accessorKey: 'start_date',
    header: ({ column }) => {
      return (
        <Button
          variant='default'
          className='text-black'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Start date
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      )
    },
  },
  {
    accessorKey: 'machine',
    header: ({ column }) => {
      return (
        <div
          className='flex text-black'
        >
          Maskin
        </div>
      )
    },
  },
  {
    accessorKey: 'type',
    header: ({ column }) => {
      return (
        <div
          className='flex text-black'
        >
          Type
        </div>
      )
    },
  },
  {
    id: 'actions',
    header: "",
    cell: ({ row }) => {
      return(
      <Link
      href={`/tasks/${row.id}`}
      className="flex h-10 rounded-xl items-center rounded-lg px-4 text-sm font-medium"
  >
      <ArrowRightIcon className="h-5 md:ml-4 text-pri rounded-xl" />
      <span className="hidden md:block ml-3 text-pri rounded-xl">Se info</span>
  </Link>)
    }
  }
]