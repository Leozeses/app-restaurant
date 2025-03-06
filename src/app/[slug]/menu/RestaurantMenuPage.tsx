import { db } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { RestaurantMenuPageProps, isConsumptionMethodValid } from "./page";

export const RestaurantMenuPage = async ({
  params,
  searchParams,
}: RestaurantMenuPageProps) => {
  const { slug } = await params;
  const { ConsumptionMethod } = await searchParams;
  if (!isConsumptionMethodValid(ConsumptionMethod)) {
    return notFound();
  }
  const restaurant = await db.restaurant.findUnique({ where: { slug } });
  if (!restaurant) {
    return notFound();
  }
  return (
    <div>
      <div className="relative h-[250px] w-full">
        <Image
          src={restaurant?.coverImageUrl}
          alt={restaurant.name}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};
