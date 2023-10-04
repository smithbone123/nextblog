import Image from "next/image";
import Head from "next/head";
import DetailTitle from "@/components/DetailTitle";
import Layout from "@/components/Layout";
import DetailAuthor from "@/components/DetailAuthor";
// import PostMetaTitle from "@/components/PostMetaTitle";
// import PostAuthor from "@/components/PostAuthor";

const Detail = () => {
  return (
    <div className="body">
      <Layout>
        <Head>
          <title>Detail</title>
        </Head>
        <article>
          <div className="pb-10">
            <div className="mx-auto w-11/12">
              <div className="flex flex-wrap">
                <Image
                  className="w-full h-full xs:w-12/12 sm:w-12/12 md:w-12/12 lg:w-12/12 xl:w-12/12 rounded-lg"
                  src="/img/featured.jpg"
                  width="2400"
                  height="1330"
                  alt=""
                />

                <DetailTitle
                  category="UI Design"
                  date="21 June, 2023"
                  title="Similique expedita autem molestias non culpa sed consectetur dignissimos"
                />
                <p className="w-12/12 mt-5 leading-relaxed">
                  Lorem ipsum dolor sit consectetur adipisicing elit. Magnam
                  quae, velit reprehenderit modi harum beatae earum perspiciatis
                  cumque nam distinctio, vero ipsam ullam eum eligendi animi
                  nostrum, tempora adipisci alias totam voluptatibus est
                  possimus inventore. Cum tempora minus non repudiandae quisquam
                  nulla atque doloribus incidunt, praesentium quia totam, fugiat
                  reprehenderit maiores excepturi soluta ipsam. Vitae
                  consequuntur officiis atque repellat incidunt, necessitatibus
                  adipisci quod quae repudiandae architecto iure iste voluptate
                  tenetur. Eaque repellendus neque labore minus, itaque
                  obcaecati nesciunt totam excepturi possimus facilis accusamus?
                  Aliquid tempore aut laboriosam cum modi non, eius nisi sint
                  ratione qui voluptatibus voluptates error iste impedit vero
                  quaerat natus ducimus, magni deleniti perferendis eum saepe
                  tempora. Earum porro, saepe debitis, perspiciatis dolor vero
                  eveniet minima itaque, hic libero labore molestiae quas
                  commodi? Repudiandae, explicabo. Tenetur repudiandae obcaecati
                  ad labore quo alias expedita molestiae eligendi iste quae
                  neque veniam eaque exercitationem mollitia, beatae dicta eum
                  assumenda sunt doloribus repellendus vero.
                  <br />
                  <br />
                  Similique expedita autem molestias non culpa, sed, consectetur
                  dignissimos, mollitia eius vitae tenetur incidunt saepe ea
                  harum unde aliquam. Libero sit quo recusandae ipsam adipisci
                  repellat nihil iure similique, fuga facere maxime, veniam
                  quaerat commodi ullam tempore earum placeat pariatur officia
                  id, quis ipsum praesentium quae temporaminima itaque, hic
                  libero labore molestiae quas commodi? Repudiandae, explicabo.
                  Tenetur repudiandae obcaecati ad labore quo alias expedita
                  molestiae eligendi iste quae neque veniam eaque exercitationem
                  mollitia, beatae dicta eum assumenda sunt doloribus
                  repellendus vero. Similique expedita autem molestias non
                  culpased. consectetur dignissimos, mollitia eius vitae tenetur
                  incidunt saepe ea harum unde aliquam. Libero sit quo
                  recusandae ipsam adipisci repellat nihil iure similique, fuga
                  facere maxime, veniam quaerat commodi ullam tempore earum
                  placeat pariatur officia id, quis ipsum praesentium quae
                  tempora. minima itaque, hic libero labore molestiae quas
                  commodi? Repudiandae, explicabo. Tenetur repudiandae obcaecati
                  ad.
                </p>
                <DetailAuthor
                  authorAvatar="/img/avatar.jpg"
                  authorName="Name Goes Here"
                  authorJob="UI Designer"
                />
              </div>
            </div>
          </div>
        </article>
      </Layout>
    </div>
  );
};

export default Detail;
