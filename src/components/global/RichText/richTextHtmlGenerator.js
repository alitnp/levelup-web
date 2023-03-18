const getTextAlign = (block) => {
	const alignment = block.tunes.textAlignment.alignment;
	if (alignment === "center") return "text-align:center;";
	if (alignment === "left") return "text-align:left;";
	return "text-align:right;";
};
const renderHeading = (block) => {
	let style = `"padding-bottom:8px; padding-top:16px; font-weight:bold;"`;
	style += getTextAlign(block);
	return `<h${block.data.level} style=${style}>${block.data.text}</h${block.data.level}>`;
};
const renderParagraph = (block) => {
	let style = `"padding-bottom:8px; "`;
	style += getTextAlign(block);
	return `<p style=${style}>${block.data.text}</p>`;
};
export const renderTable = (block) => {
	const haveHeadings = block.data.withHeadings;
	const getTBody = () => {
		let tbody = "";
		block.data.content.map((row, index) => {
			if (haveHeadings && index === 0) return;
			tbody += `<tr>${getRow(index)}</tr>`;
		});
		return tbody;
	};
	const getRow = (index) => {
		let row = "";
		block.data.content[index].map((item) => {
			row += `<td style="padding:8px 4px; border-width:1px;">${item}</td>`;
		});
		return row;
	};
	const getTHead = () => {
		let thead = "";
		if (block.data.content.length > 0) {
			block.data.content[0].map((item) => {
				thead += `<th style="padding:8px 4px; border-width:1px; background-color: #dcdcdc;">${item}</th>`;
			});
		}
		return thead;
	};
	return `<div style="margin-top:8px; margin-bottom:16px; overflow:hidden; border-width:1px; border-radius:8px;"
    >
			<div style="position:relative; overflow-x: auto; direction:rtl">
				<table style="width:100%; font-size:14px; line-height: 20px; border-width:1px; border-collapse: collapse;">
					${
						haveHeadings
							? `<thead>
							<tr style="border-bottom-width: 1px;">
								${getTHead}
							</tr>
						</thead>`
							: ``
					}
					<tbody>
						${getTBody()}
					</tbody>
				</table>
			</div>
		</div>`;
};
const renderListItems = (block) => {
	let items = "";
	const olStyle = `${
		block.data.style === "ordered"
			? "list-style-type: decimal;"
			: " list-style-type: disc;"
	} padding-top: 8px;
  padding-bottom: 8px ; list-style-position: inside;`;
	block.data.items.map((item) => {
		items += `<li
    >${item}</li>`;
	});
	let list = `<ol style="${olStyle}">
      ${items}
    </ol>`;
	return list;
};

const renderChecklist = (block) => {
	let checklist = "";
	block.data.items.map((item) => {
		checklist += `<div
				className="flex items-center gap-4 py-1"
		
			>
				<input type="checkbox" ${item.checked ? "checked" : ""} />
				<span
				>${item.text}</span>
			</div>`;
	});
	return checklist;
};

const renderDelimiter =
	() => `<div style="padding:24px auto; font-size:36px;
  line-height: 40px; font-weight: bold; text-align: center;">
					* * *
				</div>`;

const richTextHtmlGenerator = (data) => {
	let html = "";
	Object.values(data.blocks)?.map((block) => {
		if (block.type === "paragraph") {
			html += renderParagraph(block);
			return;
		}
		if (block.type === "header") {
			html += renderHeading(block);
			return;
		}
		if (block.type === "table") {
			html += renderTable(block);
			return;
		}
		if (block.type === "list") {
			html += renderListItems(block);
			return;
		}
		if (block.type === "checklist") {
			html += renderChecklist(block);
			return;
		}
		if (block.type === "Delimiter") {
			html += renderDelimiter();
			return;
		}
	});
	return html;
};

export default richTextHtmlGenerator;
