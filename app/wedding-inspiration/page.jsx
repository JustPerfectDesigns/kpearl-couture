export const revalidate = 0;

import WeddingInspiration from "@/components/WeddingComponent";
import { getWeddingInspirationProducts } from "@/sanity/product-utils";

export default async function WeddingInspirationPage() {
  const weddingProducts = await getWeddingInspirationProducts();
  return <WeddingInspiration weddingProducts={weddingProducts} />;
}
