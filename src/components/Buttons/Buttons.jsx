import Link from 'next/link'

const HeaderButton = ({ to, content }) => {
    return (
        <button>
            <Link href={to}>{content}</Link>
        </button>
    )
}

const HeroButton = ({ to, content }) => {
    return (
        <button>
            <Link href={to}>{content}</Link>
        </button>
    )
}

const Button = ({ to, content }) => {
    return (
        <button>
            <Link href={to}>{content}</Link>
        </button>
    )
}

export { HeaderButton, HeroButton ,Button}
