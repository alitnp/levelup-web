import { content, contentType } from "@/constants/models";
import routes from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";

interface IHomeArticle {
	content: content;
	index: number;
	contentTypes: contentType[];
	activeCategoryIndex: number | undefined;
}

const HomeArticle: FC<IHomeArticle> = ({
	content,
	index,
	contentTypes,
	activeCategoryIndex,
}) => {
	return (
		<div className="relative w-full overflow-hidden rounded-lg h-80">
			<Link
				href={
					index !== 3
						? routes.articles.path + "/" + content.id
						: routes.articles.path +
						  "?contentTypeId=" +
						  contentTypes[activeCategoryIndex || 0].id
				}
				key={index}
			>
				<Image
					src={content.thumbnailUrl}
					fill
					alt=""
					style={{ objectFit: "cover" }}
				/>
				{index !== 3 && (
					<div className="absolute top-0 left-0 flex flex-col items-end justify-end w-full h-full px-2 py-4 cursor-pointer bg-slate-800/60 group">
						<p className="w-full text-lg font-bold text-center text-l-opposite-text-color md:text-right">
							{content.title.length < 55
								? content.title
								: content.title.substring(0, 55) + "..."}
						</p>
						<div className="pt-2 overflow-hidden transition-all duration-1000 ease-in-out max-h-0 group-hover:max-h-20">
							<p className="px-4 py-1 text-sm text-l-opposite-text-color">
								بیشتر بخوانید
							</p>
						</div>
					</div>
				)}
				{index === 3 && (
					<div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full px-2 py-4 cursor-pointer bg-slate-800/60">
						<span className="text-6xl text-l-opposite-text-color">
							<BsArrowLeftCircle />
						</span>
						<span className="mt-2 text-base text-l-opposite-text-color">
							نمایش همه
						</span>
					</div>
				)}
			</Link>
		</div>
	);
};

export default HomeArticle;
