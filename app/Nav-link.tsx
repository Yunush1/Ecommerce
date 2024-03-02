import { AccessibilityIcon, CalculatorIcon, HomeIcon } from "lucide-react"
import Link from "next/link"
import { it } from "node:test"
import React from "react"

export function Navlink() {
    return (
        <div className="flex h-[50px] justify-center">
            {Navlist.map((item: any, index: number) => (
                <Link href={item.link}
                    className="flex m-2  text-blue-600 hover:bg-blue-100"
                >
                    <item.icon />
                    {item.title}
                </Link>))}
        </div>
    )

}

const Navlist = [
    {
        title: "Home",
        icon: HomeIcon,
        link: ''
    }, {
        title: "Mobile",
        icon: CalculatorIcon,
        link: ''
    }, {
        title: "Accessiories",
        icon: AccessibilityIcon,
        link: ''

    }
]