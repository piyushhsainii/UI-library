'use client'
import Sidebar from "@/components/Sidebar"

export default function Docs({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section className="bg-black">
            {/* Include shared UI here e.g. a header or sidebar */}
            <Sidebar />
            {children}
        </section>
    )
}