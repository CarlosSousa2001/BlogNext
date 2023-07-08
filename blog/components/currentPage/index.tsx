import Link from "next/link";

type Props = {
    totalCount: number
}
const CurrentPage = ({ totalCount }: Props) => {
    const pages = []

    const pageSize = 4;
    const totalPages = Math.ceil(totalCount / pageSize);

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
        console.log(pages)
    }

    return (
        <div>
            {pages.map((page) => (
                <Link
                    key={page}
                    href={{ pathname: '/main', query: { page: page.toString() } }}
                    passHref
                >
                    <span>Página {page}</span>
                </Link>
            ))}
        </div>
    )
}

export default CurrentPage