import ContactList from "@/components/ContactList";
import React from "react";

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function getData() {
    return await prisma.contacts.findMany()
}

export default async function Page() {
    const contactList = await getData()
    return (
        <div>
           <ContactList contacts={contactList}/>
        </div>
    )
}