import { useCart } from "@/contexts/CartContext";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { stripe } from "@/lib/stripe";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/styles/pages/product";
import { formatCurrency } from "@/utils/formatCurrency";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Stripe from "stripe";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    description: string;
    defaultPriceId: string;
  };
}

export default function Product({ product }: ProductProps) {
  const { addToCart } = useCart();

  async function handleBuyButton() {
    const newProduct = {
      id: product.id,
      name: product.name,
      imageUrl: product.imageUrl,
      price: product.price,
    };

    addToCart(newProduct);
  }

  return (
    <>
      <Head>
        <title>{`${product.name} | Ignite Shop`}</title>
      </Head>

      <DefaultLayout>
        <ProductContainer>
          <ImageContainer>
            <Image src={product.imageUrl} width={520} height={480} alt="" />
          </ImageContainer>

          <ProductDetails>
            <h1>{product.name}</h1>
            <span>{formatCurrency(product.price)}</span>
            <p>{product.description}</p>
            <button onClick={handleBuyButton}>Colocar na sacola</button>
          </ProductDetails>
        </ProductContainer>
      </DefaultLayout>
    </>
  );
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [
//       {
//         params: { id: "prod_PM6lvoRNwgmJWG" },
//       },
//     ],
//     fallback: "blocking",
//   };
// };

// export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
//   params,
// }) => {
//   const productId = params.id;

//   const product = await stripe.products.retrieve(productId, {
//     expand: ["default_price"],
//   });

//   const price = product.default_price as Stripe.Price;

//   return {
//     props: {
//       product: {
//         id: product.id,
//         name: product.name,
//         imageUrl: product.images[0],
//         price: price.unit_amount,
//         description: product.description,
//         defaultPriceId: price.id,
//       },
//     },
//     revalidate: 60 * 60 * 1,
//   };
// };
export const getServerSideProps: GetServerSideProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount,
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    //revalidate: 60 * 60 * 1,
  };
};
