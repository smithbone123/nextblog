import Link from "next/link";

const PostMetaTitle = ({ category, date, title }) => {
  return (
    <>
      <div className="flex items-center gap-4">
        <div className="uppercase">{category}</div>
        <span>&bull;</span>
        <div>{date}</div>
      </div>
      <Link href="/Detail">
        <h2 className="mt-5 leading-relaxed">{title}</h2>
      </Link>
    </>
  );
};

export default PostMetaTitle;
