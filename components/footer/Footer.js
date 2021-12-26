import Link from "next/link"

export function Footer({ menu, title, item }) {
    return (
        <>
           

                <ul>
                    {menu.map(item => (
                        <li><Link href={"/"}>{item}</Link></li>
                    ))}
                </ul>

            
        </>
    )
}