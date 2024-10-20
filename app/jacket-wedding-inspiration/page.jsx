export const revalidate = 0;

import JacketWeddingInspiration from "@/components/JacketWeddingComponent";
import { getJacketWeddingInspirationProducts } from "@/sanity/product-utils";

export default async function JacketWeddingInspirationPage() {
  const weddingProducts = await getJacketWeddingInspirationProducts();
  return <JacketWeddingInspiration weddingProducts={weddingProducts} />;
}
