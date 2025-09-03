import PostDestails from "@/app/components/PostDestails";
import { Suspense } from "react";
export default async function postDetailsPage({ params }) {
const LoadingJsx=(
    <div>Loading...</div>
);
  return (
    <div>
      <h1>Post Details Page</h1>
     <Suspense fallback={LoadingJsx}>
      <PostDestails postId={params.postId}/>
     </Suspense>
    </div>
  );
}
