import Banner from "@/components/banner"
import Card from "@/components/card"
import CurrentPage from "@/components/currentPage"
import Header from "@/components/header"
import apiPost from "@/libs/apiPost"
import { Post } from "@/types/Post"
import { NextPageContext } from "next"
import Link from "next/link"

type Props = {
    getPost: Post[],
    totalCount: number
}

const Main = ({ getPost, totalCount }: Props) => {
    return (
        <main>
            <Header />
            <div id="container" className="w-[80rem] m-auto">
                <Banner />
                <div id="pai-grid" className="flex">
                    <div id="area-noticias" className=" flex-1 grid grid-cols-2 gap-8">
                        {getPost.map((item, index) => (
                            <Card key={index} getPost={item} />
                        ))}
                        <div id="pageCurrent" className="text-white">
                            <CurrentPage totalCount={totalCount}/>
                        </div>
                    </div>
                    <div id="area-lateral" className="w-72">
                        <h1 className="text-white">Area lateral</h1>
                    </div>
                </div>
            </div>
        </main>
    )
}

export const getServerSideProps = async (context: NextPageContext) => {

    const page = context.query.page as string

    const { getPost, totalCount } = await apiPost.getPost(page)

    return {
        props: {
            getPost,
            totalCount
        }
    }

}

export default Main