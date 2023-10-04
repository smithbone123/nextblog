import Image from "next/image";
import InfoPostAdded from "./InfoPostAdded";
import Link from "next/link";

const CardPost = ({ thumbnail, ...infoPostAdded }) => {
  return (
    <>
      <div className="mx-auto md:w-11/12 xs:w-full">
        <Link href="/Detail">
          <Image
            className="w-full rounded-lg"
            src={thumbnail}
            width="2400"
            height="1330"
            alt=""
          />
        </Link>

        <InfoPostAdded {...infoPostAdded} />
      </div>
    </>
  );
};

export default CardPost;
