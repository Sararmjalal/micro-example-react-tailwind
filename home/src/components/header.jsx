import React from "react"
import { tw } from "../App"
export default function Header() {
    return (
        <div className={tw("p-5 bg-blue-500 text-white -text-3xl font-bold")}>
            Micro Frontend Header
        </div>
    )
}