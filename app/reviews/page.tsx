import Link from "next/link";
import Heading from "@/components/Heading";
import Image from "next/image";
import { getReviews } from "@/lib/reviews";
import { Metadata } from "next";
import PaginationBar from "@/components/PaginationBar";

export const metadata: Metadata = {
  title: "Reviews",
};
interface ReviewsPageProps {
  searchParams: { page?: string };
}
const PAGE_SIZE = 6;

export default async function ReviewsPage({ searchParams }: ReviewsPageProps) {
  const page = parsePageParams(searchParams.page);
  const { reviews, pageCount } = await getReviews(PAGE_SIZE, page);
  return (
    <>
      <Heading>Reviews</Heading>
      <PaginationBar href="/reviews" page={page} pageCount={pageCount} />
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

const parsePageParams = function (paramValue: string) {
  if (paramValue) {
    const page = parseInt(paramValue);
    if (isFinite(page) && page > 0) return page;
  }
  return 1;
};
