import { ReactNode } from "react";
import {
	richTextAlertData,
	richTextblock,
	richTextChecklistData,
	richTextHeaderData,
	richTextListData,
	richTextParagraphData,
	richTextSimpleImageData,
	richTextTableData,
	richTextImageData,
} from "@/components/global/RichText/richTextTypes";
import TcCheckbox from "@/components/global/Checkbox/TcCheckbox";
import endpoints from "@/constants/endpoints";

export const renderParagraph = (
	block: richTextblock<richTextParagraphData>
): ReactNode => {
	return (
		<p
			className="pb-2 "
			dangerouslySetInnerHTML={{ __html: block.data.text }}
		></p>
	);
};
export const renderHeading = (
	block: richTextblock<richTextHeaderData>
): ReactNode => {
	const CustomTag =
		`h${block.data.level}` as keyof JSX.IntrinsicElements;
	return (
		<CustomTag
			className="pt-4 pb-2"
			dangerouslySetInnerHTML={{ __html: block.data.text }}
		></CustomTag>
	);
};
export const renderTable = (
	block: richTextblock<richTextTableData>
): ReactNode => {
	const haveHeadings = block.data.withHeadings;
	return (
		<div className="mt-4 mb-8 overflow-hidden border rounded-md border-t-border-color-base">
			<div className="relative overflow-x-auto direction-ltr">
				<table className="w-full text-sm ">
					{haveHeadings && (
						<thead className="">
							<tr className="border-b border-t-border-color-base">
								{block.data.content.length > 0 &&
									block.data.content[0].map(
										(item: any, index: number) => (
											<th
												key={index}
												className="px-1 py-2 text-base bg-t-layer-bg-color"
												dangerouslySetInnerHTML={{ __html: item }}
											></th>
										)
									)}
							</tr>
						</thead>
					)}
					<tbody className="">
						{block.data.content.map((row: any, index: number) => {
							if (haveHeadings && index === 0) return <></>;
							return (
								<tr
									key={index}
									className="even:bg-[var(--table-odd-row)] odd:bg-[var(--table-even-row)] border-t-border-color-base"
								>
									{row.map((item: any, index: number) => (
										<td
											key={index}
											className="px-1 py-2"
											dangerouslySetInnerHTML={{ __html: item }}
										></td>
									))}
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};
export const renderListItems = (
	block: richTextblock<richTextListData>
): ReactNode => {
	return (
		<ol
			className={`${
				block.data.style === "ordered"
					? "list-decimal"
					: "list-disc"
			} py-2 list-inside`}
		>
			{block.data.items.map((item: any, index: number) => (
				<li
					key={index}
					dangerouslySetInnerHTML={{ __html: item }}
				></li>
			))}
		</ol>
	);
};
export const renderAlert = (
	block: richTextblock<richTextAlertData>
): ReactNode => {
	const alertClass = `alert-${block.data.type}`;
	return (
		<div
			className={`border p-2 my-2 rounded-md ${alertClass} `}
		>
			{block.data.message}
		</div>
	);
};

export const renderChecklist = (
	block: richTextblock<richTextChecklistData>
): ReactNode => {
	return block.data.items.map((item: any, index: number) => (
		<div className="flex items-center gap-4 py-1" key={index}>
			<TcCheckbox checked={item.checked} />
			<span
				dangerouslySetInnerHTML={{ __html: item.text }}
			></span>
		</div>
	));
};

export const renderSimpleImage = (
	block: richTextblock<richTextSimpleImageData>
): ReactNode => {
	return (
		<div
			className={`${
				block.data.withBackground && "bg-t-layer-bg-color"
			} my-4`}
		>
			<img
				src={block.data.url}
				className={`${
					block.data.withBorder && "border border-t-bg-color "
				} rounded-md overflow-hidden w-full h-full ${
					block.data.withBackground && "h-44"
				} object-contain`}
			/>
			{block.data.caption && (
				<p className="w-full text-center">
					{block.data.caption}
				</p>
			)}
		</div>
	);
};

export const renderImage = (
	block: richTextblock<richTextImageData>
): ReactNode => {
	return (
		<div
			className={`${
				block.data.withBackground && "bg-t-layer-bg-color"
			} my-4`}
		>
			<div className="border rounded-md border-t-border-color-base">
				<img
					src={endpoints.baseImageUrl + block.data.file.url}
					className={`${
						block.data.withBorder && "border border-t-bg-color "
					} rounded-md overflow-hidden w-full h-full ${
						block.data.withBackground && "h-44"
					} object-contain`}
				/>
			</div>
			{block.data.caption && (
				<p className="w-full text-sm text-center">
					{block.data.caption}
				</p>
			)}
		</div>
	);
};
