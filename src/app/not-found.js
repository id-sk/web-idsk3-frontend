import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">404 - Nenájdené</h2>
                <p className="text-lg mb-6">Požadovaná stránka sa nenašla</p>
                <Link href="/" className='underline'>
                    Vrátiť sa domov
                </Link>
            </div>
        </div>
    );
}
