import routes from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface IArticleItem {
	imageUrl: string;
	title: string;
	desc: string;
	type: string;
	creationDate: string;
}

const ArticleItem: FC<IArticleItem> = ({
	imageUrl,
	title,
	desc,
	type,
	creationDate,
}) => {
	return (
		<article className="flex flex-col gap-4 md:flex-row">
			<div className="relative mx-auto overflow-hidden rounded-lg md:m-0 w-52 h-52 shrink-0">
				<Image
					src={imageUrl}
					fill
					alt=""
					style={{ objectFit: "cover" }}
				/>
			</div>
			<div className="">
				<div className="text-center md:text-right">
					<span>
						{type} - {creationDate}
					</span>
				</div>
				<Link href={routes.articles.path + "/" + "asdfasf"}>
					<h1 className="mb-1 text-lg font-bold text-center md:text-right">
						{title}
					</h1>
				</Link>
				<p className="m-0 text-sm max-w-[100ch] text-center  md:text-right mx-auto md:m-0">
					{desc.slice(0, 400)}
				</p>
			</div>
		</article>
	);
};

export default ArticleItem;
