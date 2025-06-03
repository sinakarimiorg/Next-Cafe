import ProductsDetails from '@/components/templates/Products/ProductDetails';
import Comments from '@/components/templates/Testimonial/Comments';
import React from 'react'

const Product = ({ product, comments }) => {
  return (
    <>
      <ProductsDetails data={product} />
      <Comments data={comments} />
    </>
  );
};

export async function getStaticPaths(context) {

  const res = await fetch("http://localhost:4000/menu")
  const products = await res.json()

  const paths = products.map(product => ({
    params: { id: String(product.id) }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  const { params } = context

  const productResponse = await fetch(`http://localhost:4000/menu/${params.id}`)
  const productData = await productResponse.json()

  const commentsResponse = await fetch(`http://localhost:4000/comments`)
  const commentsData = await commentsResponse.json()

  return {
    props: {
      product: productData,
      comments: commentsData
    }
  }
}

export default Product