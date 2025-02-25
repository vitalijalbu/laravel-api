import { Button, Card, Container, Grid, GridItem, Image } from '@chakra-ui/react';
import { Avatar } from '@/components/ui/avatar';
import Link from 'next/link';

export default async function Home() {
	let data = await fetch(
		'https://laravel-api.test/api/products?per_page=1000',
	);
	let { data: posts } = await data.json();

	return (
		<Container>
			<Grid
				templateColumns="repeat(8, 1fr)"
				gap="6">
				{posts.map((post) => (
					<GridItem key={post.id}>
            <Link href={`/posts/${post.id}`}>
						<Card.Root overflow="hidden">
							<Image
								src="/placeholder.svg"
								alt={post?.name}
							/>
							<Card.Body gap="2">
								<Card.Title mt="2">{post?.name}</Card.Title>
								<Card.Description>{post?.id}</Card.Description>
								<Card.Description>{post?.supplier?.name}</Card.Description>
							</Card.Body>
						</Card.Root>
            </Link>
					</GridItem>
				))}
			</Grid>
		</Container>
	);
}
