import Image from "next/image";
import Link from "next/link";

const InfoPostFeatured = ({
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
      <div className="w-full xs:w-12/12 sm:w-12/12 md:w-12/12 lg:w-12/12 xl:w-4/12 xs:mt-6 xl:mt-0 xs:px-0 xl:px-8 text-white text-sm">
        <div className="flex items-center gap-4">
          <div className="uppercase">{category}</div>
          <span>&bull;</span>
          <div>{date}</div>
        </div>
        <Link href="/Detail">
          <h2 className="mt-5 leading-relaxed">{title}</h2>
        </Link>
        <p className="w-11/12 mt-5 leading-relaxed">{shortDescription}</p>
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
      </div>
    </>
  );
};

export default InfoPostFeatured;
