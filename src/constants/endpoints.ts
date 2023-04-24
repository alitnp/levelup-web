const endpoints = {
	// baseUrl: "http://Apitest.levelupfx724.com/api/",
	baseUrl: "http://luapi.levelupfx724.com/api/",
	baseImageUrl:
		"http://luapi.levelupfx724.com/uploads/contents/",

	//content
	getContentsList: "/Contents/Search",

	//contentTypes
	getContentTypesList: "/ContentTypes/Search",

	//user
	getUserByMobileNumber: "/Users/GetUserByMobileNumber",
	userRegister: "/Users/RegisterUser",
	userConfirmOtp: "/Users/ConfirmUserByOtp",
	userResendOtp: "/Users/ResendToken",
};

export default endpoints;
