import Image from "next/image";
import InfoPostFeatured from "./InfoPostFeatured";
import Link from "next/link";

const FeaturedPost = () => {
  return (
    <article>
      <div className="pb-10">
        <div className="mx-auto w-11/12">
          <div className="flex flex-wrap">
            {/* left */}
            <Link
              href="/Detail"
              className="w-full h-full xs:w-12/12 sm:w-12/12 md:w-12/12 lg:w-12/12 xl:w-8/12"
            >
              <Image
                className="rounded-lg"
                src="/img/featured.jpg"
                width="2400"
                height="1330"
                alt=""
              />
            </Link>

            {/* right */}
            <InfoPostFeatured
              category="UI Design"
              date="21 June, 2023"
              title="Similique expedita autem molestias non culpa sed consectetur dignissimos"
              shortDescription="Similique expedita autem molestias non culpa, sed, consectetur dignissimos, mollitia eius vitae tenetur incidunt saepe ea harum unde aliquam. Libero sit quo recusandae ipsam adipisci repellat nihil iure similique, fuga facere maxime, veniam quaerat commodi ullam tempore earum placeat pariatur officia id, quis ipsum praesentium quae temporaminima itaque, hic libero labore molestiae quas commodi? Repudiandae, explicabo. Tenetur repudiandae obcaecati ad 
              labore quo alias expedita molestiae"
              authorAvatar="/img/avatar.jpg"
              authorName="Name Goes Here"
              authorJob="UI Designer"
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default FeaturedPost;
