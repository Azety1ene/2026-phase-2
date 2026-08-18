import { useEffect, useState } from "react"
import { Link } from "react-router"

export default function TopPage() {
	const [message, setMessage] = useState<string | null>(null)
	useEffect(() => {
		fetch(`${window.location.origin}/api/hello-react-router`)
			.then((res) => res.json())
			.then((json) => setMessage(json.message))
	}, [])

	return (
		<div>
			<h1>トップページ</h1>
			<div>{message}</div>
			<Link to="/auth/login">ログインページへ</Link>
			<br></br>
			<Link to="/auth/register">新規登録の方はこちら</Link>
			<br></br>
			<Link to="/app">アプリのホームへ(ログインしてからでないと怖いことになります)</Link>
		</div>
	)
}
