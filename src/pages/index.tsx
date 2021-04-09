// import Link from "next/link";
import Layout from "../components/Layout";
import { Login, Logout, auth } from "../lib/firebase";

const IndexPage = () => (
	<Layout title="ぼちわん">
		<div className="container">
			<div>
				<button onClick={() => Login()}>ログイン</button>
				<button onClick={() => Logout()}>ログアウト</button>
			</div>
			<div>
				<pre>
					{auth.currentUser
						? auth.currentUser.displayName + "でログインしています"
						: "ログインしていません"}
				</pre>
			</div>
		</div>
		<style jsx>{`
			.container {
				background-image: url('bg.png');
				height: 100vh; /* 全画面表示 */
				background-repeat: no-repeat;
				background-size: cover;
				background-position: center center;
			}
		`}</style>
		<style global jsx>{`
      html,
      body,
      body > div:first-child,
      div#__next,
      div#__next > div {
        height: 100%;
      }
    `}</style>
	</Layout>
);

export default IndexPage;
