import Image from "next/image";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { FaMinus, FaPlus } from "react-icons/fa";

interface ImageComment {
  author: string;
  profileImage: string;
  content: string;
  likes: number;
  creationTime: number;
}
interface ImageCommentArray {
  comments: ImageComment[];
}
const ImageComments = (props: ImageCommentArray) => {
  const { comments } = props;
  return (
    <div className="flex flex-col w-full h-full overflow-y-scroll scrollbar py-3">
      Comments {`(${comments?.length})`}
      {comments?.map((comment, idx) => (
        <div className={`flex flex-row ${idx === 0 && "pt-3"}`} key={idx}>
          <div className="pt-[2px] pr-2">
            {comment.profileImage ? (
              <Image
                className="w-12 h-12"
                width={32}
                height={32}
                src={comment.profileImage}
                alt=""
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-950 to-purple-700 flex justify-center items-center text-white text-xl">
                {comment.author.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
          <div className="flex flex-col ">
            <span>{comment.author}</span>
            <span className="whitespace-wrap w-full">{comment.content}</span>
            <div className="flex flex-row">Reply</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export { ImageComments };
