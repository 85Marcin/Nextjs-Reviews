import Link from "next/link";
import Heading from "@/components/Heading";
import Image from "next/image";
import { getReviews } from "@/lib/reviews";

export default async function HomePage() {
  const reviews = await getReviews(3);

  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">Only the best indie games reviewed for you</p>
      <ul>
        {reviews.map((review, index) => (
          <li
            key={review.slug}
            className="bg-white border rounded shadow w-80 sm:w-full hover:shadow-lg"
          >
            <Link
              href={`/reviews/${review.slug}`}
              className="flex flex-col sm:flex-row"
            >
              <Image
                src={review.image}
                alt=""
                width="320"
                height="180"
                className="rounded-t rounded-r-none sm:rounded-l"
                priority={index === 0}
              />
              <div className="px-2 py-1 text-center sm:text-left">
                <h2 className="font-semibold font-orbitron">{review.title}</h2>
                <p className="hidden pt-2 sm:block">{review.subtitle}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
