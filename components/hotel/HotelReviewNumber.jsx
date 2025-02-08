import { getReviewsForAHotel } from "@/database/queries";
import Link from "next/link";

const HotelReviewNumber = async () => {
    const reviews = await getReviewsForAHotel();

    return (
        <>
            {reviews?.length === 0 ? (
                <Link href={"#"} className="underline">
                    Be the first one to Review
                </Link>
            ) : (
                <Link href={`/hotel/${id}/reviews`}>
                    {reviews?.length} Reviews
                </Link>
            )}
        </>
    );
};

export default HotelReviewNumber;
