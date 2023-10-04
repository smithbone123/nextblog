import PostMetaTitle from "./PostMetaTitle";
import PostAuthor from "./PostAuthor";

const InfoPostAdded = ({
  category,
  date,
  title,
  shortDescription,
  authorAvatar,
  authorName,
  authorJob,
}) => {
  return (
    <>
      <div className="w-full mt-5 text-white text-sm">
        <PostMetaTitle category={category} date={date} title={title} />
        <p className="w-11/12 mt-5 leading-relaxed">{shortDescription}</p>
        <PostAuthor
          authorAvatar={authorAvatar}
          authorName={authorName}
          authorJob={authorJob}
        />
      </div>
    </>
  );
};

export default InfoPostAdded;
