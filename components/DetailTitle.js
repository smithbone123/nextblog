const DetailTitle = ({
  category,
  date,
  title,
  Description,
  authorAvatar,
  authorName,
  authorJob,
}) => {
  return (
    <>
      <div className="w-full xs:w-12/12 sm:w-12/12 md:w-12/12 lg:w-12/12 xl:w-12/12 xs:mt-6 xl:mt-5 xs:px-0 xl:px-0 text-white text-sm">
        <div className="flex items-center gap-4">
          <div className="uppercase">{category}</div>
          <span>&bull;</span>
          <div>{date}</div>
        </div>
        <h2 className="mt-5 leading-relaxed">{title}</h2>
        <p className="w-12/12">{Description}</p>
      </div>
    </>
  );
};

export default DetailTitle;
