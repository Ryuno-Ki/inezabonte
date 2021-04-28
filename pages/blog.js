import { getFeed } from "../lib/rss";
import { format } from "date-fns";
import Layout from "../components/Layout";

export default function Blog({ items }) {
	return (
		<Layout page="Blog | Ineza Bonté">
			<main className="lg:max-w-6xl  lg:m-auto p-10 space-y-4">
				<div>
					<h1 className="text-3xl font-bold dark:text-white mb-4">Blog</h1>
					<p className="text-lg max-w-lg text-gray-500">
						I publish articles sometimes, explaining concepts I've learnt and
						would like to share.
					</p>
				</div>
				<div className="space-y-8">
					{items.map((item) => (
						<div key={item.link}>
							<a
								className="text-xl"
								href={item.link}
								target="_blank"
								rel="noopener noreferrer"
							>
								{item.title}
							</a>
							<p className="text-base text-gray-500">
								{format(new Date(item.isoDate), "PPP")}
							</p>
						</div>
					))}
				</div>
			</main>
		</Layout>
	);
}

export async function getStaticProps() {
	const detailedFeed = await getFeed();

	return {
		props: {
			items: detailedFeed.items,
		},
		revalidate: 1,
	};
}
