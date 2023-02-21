import Image from 'next/image'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'

const contacts = [
  {
    id: 1,
    name: 'Satyam Bansal',
    title: 'Senior Blockchain Developer',
    email: 'satyamsgsits1994@gmail.com',
  },
  {
    id: 2,
    name: 'Shivam Tomar',
    title: 'Senior Frontend Developer',
    email: 'satyamsgsits1994@gmail.com',
  },
  {
    id: 3,
    name: 'Jane Coooper',
    title: 'Senior Blockchain Developer',
    email: 'satyamsgsits1994@gmail.com',
  },
  {
    id: 4,
    name: 'Shivam Tomar',
    title: 'Senior Frontend Developer',
    email: 'satyamsgsits1994@gmail.com',
  },
  {
    id: 5,
    name: 'Jane Coooper',
    title: 'Senior Blockchain Developer',
    email: 'satyamsgsits1994@gmail.com',
  },
  {
    id: 6,
    name: 'Shivam Tomar',
    title: 'Senior Frontend Developer',
    email: 'satyamsgsits1994@gmail.com',
  },
  {
    id: 7,
    name: 'Jane Coooper',
    title: 'Senior Blockchain Developer',
    email: 'satyamsgsits1994@gmail.com',
  },
  {
    id: 8,
    name: 'Shivam Tomar',
    title: 'Senior Frontend Developer',
    email: 'satyamsgsits1994@gmail.com',
  },
  {
    id: 9,
    name: 'Jane Coooper',
    title: 'Senior Blockchain Developer',
    email: 'satyamsgsits1994@gmail.com',
  },
  {
    id: 10,
    name: 'Shivam Tomar',
    title: 'Senior Frontend Developer',
    email: 'satyamsgsits1994@gmail.com',
  },
  {
    id: 11,
    name: 'Jane Coooper',
    title: 'Senior Blockchain Developer',
    email: 'satyamsgsits1994@gmail.com',
  },
  {
    id: 12,
    name: 'Shivam Tomar',
    title: 'Senior Frontend Developer',
    email: 'satyamsgsits1994@gmail.com',
  },
  {
    id: 13,
    name: 'Jane Coooper',
    title: 'Senior Blockchain Developer',
    email: 'satyamsgsits1994@gmail.com',
  },
  {
    id: 14,
    name: 'Shivam Tomar',
    title: 'Senior Frontend Developer',
    email: 'satyamsgsits1994@gmail.com',
  },
  {
    id: 15,
    name: 'Jane Coooper',
    title: 'Senior Blockchain Developer',
    email: 'satyamsgsits1994@gmail.com',
  },
]

export default function GridList() {
  return (
    <section className="bg-gray-100 p-10">
      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {contacts.map(({ id, name, title, email }) => (
          <li key={id} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
            <div className="flex w-full items-center justify-between space-x-6 p-6">
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <h3 className="truncate text-sm font-medium text-gray-900">{name}</h3>
                  <span className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                    Admin
                  </span>
                </div>
                <p className="mt-1 truncate text-sm text-gray-500">{title}</p>
              </div>
              <Image
                className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                alt="Jane Cooper"
                width={40}
                height={40}
              ></Image>
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="flex w-0 flex-1">
                  <a
                    href={`mailto:${email}`}
                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                  >
                    <EnvelopeIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    ></EnvelopeIcon>
                    <span className="ml-3">Email</span>
                  </a>
                </div>
                <div className="flex w-0 flex-1">
                  <a
                    href="tel:+1-202-555-0170"
                    className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                  >
                    <PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true"></PhoneIcon>
                    <span className="ml-3">Call</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
