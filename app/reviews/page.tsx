import Link from "next/link";
import Heading from "@/components/Heading";
import Image from "next/image";
import { getReviews } from "@/lib/reviews";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews",
};

export default async function ReviewsPage() {
  const reviews = await getReviews(6);

  return (
    <>
      <Heading>Reviews</Heading>
      <div>
        <ul className="flex flex-row flex-wrap gap-3">
          {reviews.map((review, index) => (
            <li
              key={review.slug}
              className="bg-white border rounded shadow w-80 hover:shadow-lg"
            >
              <Link href={`/reviews/${review.slug}`}>
                <Image
                  src={review.image}
                  alt=""
                  priority={index === 0}
                  width="320"
                  height="180"
                  className="rounded-t"
                />
                <h2 className="py-1 font-semibold text-center font-orbitron">
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
