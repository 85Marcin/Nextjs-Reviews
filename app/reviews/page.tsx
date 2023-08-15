import Link from "next/link";
import Heading from "@/components/Heading";
import { getReviews } from "@/lib/reviews";

export default async function ReviewsPage() {
  const reviews = await getReviews();

  return (
    <>
      <Heading>Reviews</Heading>
      <div>
        <ul className="flex flex-row flex-wrap gap-3">
          {reviews.map((review) => (
            <li
              key={review.slug}
              className=" bg-white border w-80 rounded shadow hover:shadow-lg"
            >
              <Link href={`/reviews/${review.slug}`}>
                <img
                  src={review.image}
                  alt=""
                  width="320"
                  height="180"
                  className="rounded-t"
                />
                <h2 className="text-center py-1 font-orbitron font-semibold">
                  {review.title}
                </h2>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
