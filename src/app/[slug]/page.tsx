import { db } from "@/lib/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";
import ConsumptionMethodOptions from "./components/consumption-method-option";

interface RestaurantPageProps {
  params: Promise<{ slug: string }>;
}

const RestaurantPages = async ({ params }: RestaurantPageProps) => {
  const { slug } = await params;
  const restaurant = await db.restaurant.findUnique({ where: { slug } });
  if (!restaurant) {
    return notFound();
  }
  return (
    <div className="flex h-screen flex-col items-center justify-center px-6 pt-24">
      <div className="flex flex-col items-center gap-2">
        <Image
          src={restaurant?.avatarImageUrl}
          alt={restaurant.name}
          width={82}
          height={82}
        />
        <h2 className="font-semibold">{restaurant.name}</h2>
      </div>
      <div className="space-y-2 pt-24 text-center">
        <h3 className="text-2xl font-semibold">Seja Bem-Vindo!</h3>
        <p className="opacity-55">
          Escolha como prefere aproveitar sua refeição. Estamos aqui para
          oferecer praticidade e sabor em cada detalhe!
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 pt-14">
        <ConsumptionMethodOptions
          option="DINE_IN"
          buttonText={"Para comer aqui"}
          imageUrl={"/dine_in.png"}
          imageAlt={"Comer aqui"}
        />
        <ConsumptionMethodOptions
          option="TAKEAWAY"
          imageUrl={"/takeaway.png"}
          imageAlt={"Para levar"}
          buttonText={"Para levar"}
        />
      </div>
    </div>
  );
};

export default RestaurantPages;

// server components - renderizados no servidor
// podem ser async
// podem chamar recursos do back-end (banco de dados)
// não pode usar hooks
// não pode ter interatividade
