import React from 'react';
import { format } from 'date-fns';

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export type Contact = {
    user_id: string;
    contact_id: bigint;
    first_name: string;
    last_name: string | null;
    image_url: string;
    location: string | null;
    contact_type: string;
    frequency: number;
    contact_medium: string;
    last_contact: Date;
    next_contact: Date | null;
    due: boolean;
};

const statuses = {
    true: 'text-green-400 bg-green-400/10',
    false: 'text-rose-400 bg-rose-400/10'
}

const defaultContact = {
    image_url: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    due: false
}

export default function ContactList({ contacts }: { contacts: Contact[] }) {
    return (
        <div className="bg-gray-900 py-10">
            <h2 className="px-4 text-base font-semibold leading-7 text-white sm:px-6 lg:px-8">Contacts</h2>
            <table className="mt-6 w-full whitespace-nowrap text-left">
                <colgroup>
                    <col className="w-full sm:w-4/12" />
                    <col className="lg:w-4/12" />
                    <col className="lg:w-2/12" />
                    <col className="lg:w-1/12" />
                    <col className="lg:w-1/12" />
                </colgroup>
                <thead className="border-b border-white/10 text-sm leading-6 text-white">
                <tr>
                    <th scope="col" className="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8">
                        Contact
                    </th>
                    <th scope="col" className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell">
                        Location
                    </th>
                    <th scope="col" className="py-2 pl-0 pr-4 text-right font-semibold sm:pr-8 sm:text-left lg:pr-20">
                        Frequency
                    </th>
                    <th scope="col" className="hidden py-2 pl-0 pr-8 font-semibold md:table-cell lg:pr-20">
                        Last Contact Date
                    </th>
                    <th scope="col" className="hidden py-2 pl-0 pr-4 text-right font-semibold sm:table-cell sm:pr-6 lg:pr-8">
                        Due
                    </th>
                </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                {contacts.map((contact) => {
                    const mergedContact = { ...defaultContact, ...contact };
                    return (
                        <tr key={mergedContact.user_id}>
                            <td className="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
                                <div className="flex items-center gap-x-4">
                                    <img src={mergedContact.image_url} alt=""
                                         className="h-8 w-8 rounded-full bg-gray-800"/>
                                    <div className="truncate text-sm font-medium leading-6 text-white">
                                        {mergedContact.first_name} {mergedContact.last_name}
                                    </div>
                                </div>
                            </td>
                            <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                                <div className="flex gap-x-3">
                                    <div className="font-mono text-sm leading-6 text-gray-400">
                                        {mergedContact.location
                                            ? mergedContact.location.charAt(0).toUpperCase() + mergedContact.location.slice(1)
                                            : 'N/A'}
                                    </div>
                                </div>
                            </td>
                            <td className="py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20">
                                <div className="flex items-center justify-end gap-x-2 sm:justify-start">
                                    <div className="text-white">{`Every ${mergedContact.frequency} days`}</div>
                                </div>
                            </td>
                            <td className="hidden py-4 pl-0 pr-8 text-sm leading-6 text-gray-400 md:table-cell lg:pr-20">
                                {format(mergedContact.last_contact, 'MMM d, yyyy')}
                            </td>
                            <td className="hidden py-4 pl-0 pr-4 text-right text-sm leading-6 text-gray-400 sm:table-cell sm:pr-6 lg:pr-8">
                                <div className="flex items-center justify-end gap-x-2">
                                    <div
                                        className={`flex-none rounded-full p-1 ${statuses[mergedContact.due ? 'true' : 'false']}`}>
                                        <div className="h-1.5 w-1.5 rounded-full bg-current"/>
                                    </div>
                                    <span>{mergedContact.due ? 'Not Due' : 'Due'}</span>
                                </div>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}