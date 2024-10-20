export const revalidate = 0;

import AgbadaWeddingInspiration from "@/components/AgbadaWeddingComponent";
import { getAgbadaWeddingInspirationProducts } from "@/sanity/product-utils";

export default async function AgbadaWeddingInspirationPage() {
  const weddingProducts = await getAgbadaWeddingInspirationProducts();
  return <AgbadaWeddingInspiration weddingProducts={weddingProducts} />;
}
