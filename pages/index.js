import { useState } from "react";
import FeaturedPost from "@/components/FeaturedPost";
import CardPost from "@/components/CardPost";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import Head from "next/head";
// json
import mockPost from "@/utils/post.json";

const Home = () => {
  // post added
  const [post, setPost] = useState(mockPost);
  Head;

  return (
    <div className="body">
      <Layout>
        <Head>
          <title>Home</title>
        </Head>
        <FeaturedPost />
        {/* Post Added */}
        <div className="pb-8">
          <div className="mx-auto w-11/12">
            {/* section header */}
            <SectionHeader>Posts Added</SectionHeader>
            <div className="flex flex-wrap lg:-mx-4 xs:mx-0">
              {post.map((post) => (
                <div
                  key={post.id}
                  className="flex flex-col xs:w-12/12 sm:w-12/12 md:w-4/12 lg:w-4/12 xl:w-4/12 mb-10"
                >
                  <CardPost {...post} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};
export default Home;
