import {
    useParams,
} from "react-router-dom";
import { getPost } from "../posts";

export default function Post() {

    let params = useParams();
    let post = getPost(parseInt(params.postId, 10));

    return (
        <main style={{ padding: "1rem", width: "50%" }}>
            <h2>{post.name}</h2>
            <p>{post.data}</p>
            <p>
                {post.texto}
            </p>

        </main>
    );
}