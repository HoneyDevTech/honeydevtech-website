'use client'

import { Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function Header() {

    const [openMenu, setOpenMenu] = useState<boolean>(false);

    return <div className="flex px-[20px] lg:px-[60px] py-[10px] justify-between items-start md:items-center bg-white">
        <Link href="/">
            <div className="flex items-center gap-2">
                <Image src="/images/logo.png" alt="logo" width={50} height={50} />
                <h3 className="text-2xl font-bold">HoneyDevTech</h3>
            </div>
        </Link>
        <div className={`${ !openMenu ? "hidden " : "flex "} md:flex absolute md:relative justify-between items-center flex-col md:flex-row bg-white md:gap-10 text-md text-gray-700 w-full md:w-auto left-0`}>
            <Link href="/" className="hover:text-blue-600 hover:font-bold w-full md:w-auto text-center hover:bg-gray-200 md:hover:bg-inherit py-3 md:py-0">
                About us
            </Link>
            <Link href="/" className="hover:text-blue-600 hover:font-bold w-full md:w-auto text-center hover:bg-gray-200 md:hover:bg-inherit py-3 md:py-0">
                Services
            </Link>
            <Link href="/" className="hover:text-blue-600 hover:font-bold w-full md:w-auto text-center hover:bg-gray-200 md:hover:bg-inherit py-3 md:py-0">
                Portfolio
            </Link>
            <Link href="/" className="hover:text-blue-600 hover:font-bold w-full md:w-auto text-center hover:bg-gray-200 md:hover:bg-inherit py-3 md:py-0">
                Blog
            </Link>
        </div>
        <div className="flex gap-2">
            <Button className="hidden md:flex" color="blue">
                Contact Us
            </Button>
            <Button color={ openMenu ? "red" : "blue"} className="flex md:hidden" onClick={() => setOpenMenu(!openMenu)}>
                {
                    openMenu ? (
                        <Icon icon="vaadin:close" width={32} height={32} />
                    ) : (
                        <Icon icon="ph:list-fill" width={32} height={32} />
                    )
                }
            </Button>
        </div>
    </div>
}