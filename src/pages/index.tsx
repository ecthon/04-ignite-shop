import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { stripe } from '@/lib/stripe'
import { GetServerSideProps } from 'next'
import Stripe from 'stripe'

const inter = Inter({ subsets: ['latin'] })

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string,
    price: number
  }[]
}

export default function Home({ products }: HomeProps) {
  return (
    <>
      <h1>Hello</h1>
      <pre>{JSON.stringify(products)}</pre>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {

  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount / 100
    }
  })

  return {
    props: {
      products
    }
  }
}
