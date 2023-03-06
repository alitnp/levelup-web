import { content } from "@/constants/models";
import routes from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface IArticleItem {
	content: content;
}

const ArticleItem: FC<IArticleItem> = ({ content }) => {
	return (
		<article className="flex flex-col gap-4 md:flex-row">
			<div className="relative mx-auto overflow-hidden rounded-lg md:m-0 w-52 h-52 shrink-0">
				<Link href={routes.articles.path + "/" + content.id}>
					<Image
						src={content.thumbnailUrl}
						fill
						alt=""
						style={{ objectFit: "cover" }}
					/>
				</Link>
			</div>
			<div className="">
				<div className="flex gap-2 text-center md:text-right">
					<span className="text-sm">{"اخبار"}</span>
					<span className="text-sm text-l-secondary-text-color">
						{content.creationTime} - {content.creationDate}
					</span>
				</div>
				<Link href={routes.articles.path + "/" + content.id}>
					<h1 className="mb-1 text-lg font-bold text-center md:text-right">
						{content.title}
					</h1>
				</Link>
				<p className="m-0 text-sm max-w-[100ch] text-center  md:text-right mx-auto md:m-0">
					{content.description.slice(0, 400)}
				</p>
			</div>
		</article>
	);
};

export default ArticleItem;
