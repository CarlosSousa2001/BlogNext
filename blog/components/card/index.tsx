import { Post } from "@/types/Post"

type Props = {
    getPost:Post
}
const Card = ({getPost}:Props) => {
    return (
        <div id='container'  className="w-full mb-4">
            <img src={getPost.img} alt="imagem"/>
            <div id="nameDate" className="my-4 flex justify-between">
                <span className="text-white">{getPost.category}</span>
                <span className="text-white">18 de maio de 20223</span>
            </div>
            <div id="title" className=" flex flex-col gap-2">
                <h2 className="text-mainText text-lg font-bold">{getPost.title}</h2>
                <p className="text-white text-sm">{getPost.resume}</p>
            </div>
        </div>
    )
}

export default Card