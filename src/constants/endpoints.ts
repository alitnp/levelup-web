const endpoints = {
	baseUrl: "http://Apitest.levelupfx724.com/api/",
	// baseUrl: "http://146.19.212.83:1159/api/",
	baseImageUrl: "",

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
