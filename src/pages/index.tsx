import {
  ArrowButtonOverlay,
  HomeContainer,
  Product,
  ProductButton,
  ProductSlider,
} from "@/styles/pages/home";
import Image from "next/image";

import { useKeenSlider } from "keen-slider/react";

import "keen-slider/keen-slider.min.css";
import { GetStaticProps } from "next";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { formatCurrency } from "@/utils/formatCurrency";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { CaretLeft, CaretRight, Handbag } from "phosphor-react";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[];
}

export default function Home({ products }: HomeProps) {
  const { addToCart } = useCart()
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    mode: "free-snap",
    slides: {
      perView: "auto",
      spacing: 48,
      origin: 0,
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <DefaultLayout>
        <HomeContainer>
          <ProductSlider ref={sliderRef} className="keen-slider">
            {products.map((product, index) => {
              return (
                <Product
                  key={product.id}
                  active={currentSlide === index}
                  className="keen-slider__slide"
                >
                  <Link
                    href={`/product/${product.id}`}
                    prefetch={false}
                  >
                    <Image
                      src={product.imageUrl}
                      alt=""
                      width={520}
                      height={480}
                    />
                  </Link>

                  <footer>
                    <div>
                      <strong>{product.name}</strong>
                      <span>{formatCurrency(product.price)}</span>
                    </div>
                    <ProductButton onClick={() => addToCart(product)}>
                      <Handbag size={32} weight="bold" />
                    </ProductButton>
                  </footer>
                </Product>
              );
            })}
          </ProductSlider>
          <ArrowButtonOverlay side={"left"}>
            <button
              disabled={currentSlide === 0}
              onClick={(e) => {
                e.stopPropagation();
                instanceRef.current.prev();
              }}
            >
              <CaretLeft size={48} weight="bold" />
            </button>
          </ArrowButtonOverlay>
          <ArrowButtonOverlay side={"right"}>
            <button
              disabled={
                currentSlide ===
                instanceRef.current?.track.details.slides.length - 1
              }
              onClick={(e) => {
                e.stopPropagation();
                instanceRef.current.next();
              }}
            >
              <CaretRight size={48} weight="bold" />
            </button>
          </ArrowButtonOverlay>
        </HomeContainer>
      </DefaultLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  };
};
