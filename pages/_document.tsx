import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
					{/* Use minimum-scale=1 to enable GPU rasterization */}
					<meta
						name="viewport"
						content="width=device-width, minimum-scale=1, initial-scale=1, shrink-to-fit=no, user-scalable=no"
					/>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Rokkitt&display=swap"
						rel="stylesheet"
					/>
					<link rel="stylesheet" href="/fonts/stylesheet.css" />
					<link
						rel="stylesheet"
						href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
					/>
					<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
