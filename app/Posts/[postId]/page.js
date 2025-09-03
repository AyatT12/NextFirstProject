import PostDestails from "@/app/components/PostDestails";
import { Suspense } from "react";
export default async function postDetailsPage({ params }) {

  return (
    <div>
      <h1>Post Details Page</h1>
     <Suspense>
      <PostDestails postId={params.postId}/>
     </Suspense>
    </div>
  );
}
