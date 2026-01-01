import Layout from "@/components/Layout";
import HomePage from "@/pages/HomePage";

export const routes = [
	{
		path: "/",
		element: <Layout />,
		children: [{ index: true, element: <HomePage /> }],
	},
];
