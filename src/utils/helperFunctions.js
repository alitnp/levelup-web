export const englishNumberOnly = (
	input,
	allowCammaAndDot,
	allowDot
) => {
	if (input === null || input === undefined) return "";
	input = input.toString();
	if (!allowCammaAndDot && !allowDot)
		input = input.replace(/[^۰۱۲۳۴۵۶۷۸۹0123456789]/g, "");
	if (allowCammaAndDot)
		input = input.replace(/[^۰۱۲۳۴۵۶۷۸۹0123456789,.]/g, "");
	if (!allowCammaAndDot && allowDot)
		input = input.replace(/[^۰۱۲۳۴۵۶۷۸۹0123456789.]/g, "");

	input = input.replace(/ /g, "");
	input = input.replace(/۰/g, "0");
	input = input.replace(/۱/g, "1");
	input = input.replace(/۲/g, "2");
	input = input.replace(/۳/g, "3");
	input = input.replace(/۴/g, "4");
	input = input.replace(/۵/g, "5");
	input = input.replace(/۶/g, "6");
	input = input.replace(/۷/g, "7");
	input = input.replace(/۸/g, "8");
	input = input.replace(/۹/g, "9");

	return input;
};

export const getEnglishNumber = (
	number,
	needString = false
) => {
	const string = englishNumberOnly(number);
	if (!string && !needString) return 0;
	if (!string && needString) return "";
	if (needString) return string;
	return parseInt(string);
};

export const convertFormValuesToEnglishNumber = (
	value,
	values,
	shouldBeNumberList,
	form,
	needString = false
) => {
	const changedInputName = Object.keys(value)[0];
	if (shouldBeNumberList.includes(changedInputName)) {
		form.setFieldsValue({
			...values,
			[changedInputName]: getEnglishNumber(
				value[changedInputName],
				needString
			),
		});
	}
};
