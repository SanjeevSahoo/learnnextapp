import React, { Suspense } from "react";
import Posts from "../components/Posts";
import Feeds from "../components/Feeds";

function PostFeeds() {
  return (
    <section>
      <Suspense fallback={<p>Loading Posts...</p>}>
        <Posts />
      </Suspense>
      <Suspense fallback={<p>Loading feeds...</p>}>
        <Feeds />
      </Suspense>
    </section>
  );
}

export default PostFeeds;
