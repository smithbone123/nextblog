import { useState } from "react";
import CardPost from "@/components/CardPost";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import Head from "next/head";
// json
import mockPost from "@/utils/post.json";

const Post = () => {
  // post added
  // const [post, setPost] = useState([]);
  const [post, setPost] = useState(mockPost);

  return (
    <div className="body">
      <Layout>
        <Head>
          <title>Category</title>
        </Head>
        {/* Post Added */}
        <div className="pb-8">
          <div className="mx-auto w-11/12">
            {/* section header */}
            <SectionHeader>Category</SectionHeader>

            {post.length < 1 ? (
              // No Result
              <div className="text-center py-20">
                <h2 className="text-white">No Result</h2>
                <p>We couldnt find any posts.</p>
              </div>
            ) : (
              // No Result
              // Result
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
              // Result
            )}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Post;
