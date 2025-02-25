import { Button } from '@/components/ui/button'
import { Container } from '@chakra-ui/react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

async function getPost(id) {
    try {
      const res = await fetch(`https://laravel-api.test/api/products/${id}`)
      
      if (!res.ok) {
        return null
      }
  
      const post = await res.json()
      return post || null
    } catch (error) {
      return null
    }
  }
  


  
export default async function Page({ params }) {
  const { id } = await params;
  const post = await getPost(id);
  // console.log('post:', post);
  // console.log('id:', id);



  return (
    <Container>
        <Button variant="outline" size="sm" asChild>
            <Link href="/">Back</Link></Button>
      <h1>{post?.name}</h1>
      <p>{post?.pricing}</p>
      <p>{post?.supplier?.name}</p>
    </Container>
  )
}
