import Image from "next/image";

const PostAuthor = ({ authorAvatar, authorName, authorJob }) => {
  return (
    <div className="flex items-center mt-5 gap-4">
      <Image
        className="rounded-full object-cover w-10 h-10"
        src={authorAvatar}
        width="700"
        height="700"
        alt=""
      />
      <div className="flex flex-col w-11/12">
        <h2>{authorName}</h2>
        <div className="text-white/30">{authorJob}</div>
      </div>
    </div>
  );
};

export default PostAuthor;
