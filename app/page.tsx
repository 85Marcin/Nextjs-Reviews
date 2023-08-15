import Link from "next/link";
import Heading from "@/components/Heading";
import { getFeaturedReview } from "@/lib/reviews";

export default async function HomePage() {
  const review = await getFeaturedReview();

  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">Only the best indie games reviewed for you</p>
      <div className="bg-white border rounded shadow w-80 sm:w-full hover:shadow-lg">
        <Link
          href={`/reviews/${review.slug}`}
          className="flex flex-col sm:flex-row"
        >
          <img
            src={review.image}
            alt=""
            width="320"
            height="180"
            className="rounded-t rounded-r-none sm:rounded-l"
          />
          <h2 className="py-1 font-semibold text-center font-orbitron sm:px-2">
            {review.title}
          </h2>
        </Link>
      </div>
    </>
  );
}
