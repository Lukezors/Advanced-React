import Link from 'next/link';

const Nav = () => (
    <div>
        <Link href="/">
            <a>Go Home!</a>
        </Link>
        <Link href="/sell">
            <a>Sell!</a>
        </Link>
    </div>
)

export default Nav;