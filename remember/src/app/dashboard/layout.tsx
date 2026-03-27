import Link from "next/link"

export default function DashboardLay ({children}: {children: React.ReactNode}) {
    return (
        <main>
        <header className="">
            <h1 className="">Remember</h1>
            <div className="">
            <Link href="/dashboard/trips/create">Crear viaje</Link>
            <Link href="/dashboard/trips">Mis viajes</Link>
            <Link href="/dashboard/profile">Mi perfil</Link>
            <Link href="/dashboard/config">Configuracion</Link>
            </div>
        </header>
        <section>{children}</section>
        </main>
    )
}