import React, { Suspense } from "react";
import Posts from "../components/Posts";
import Feeds from "../components/Feeds";

function PostFeeds() {
  return (
    <section>
      <Suspense fallback={<p>Loading Posts...</p>}>
        {/* @ts-expect-error Server Component */}
        <Posts />
      </Suspense>
      <Suspense fallback={<p>Loading feeds...</p>}>
        {/* @ts-expect-error Server Component */}
        <Feeds />
      </Suspense>
    </section>
  );
}

export default PostFeeds;
