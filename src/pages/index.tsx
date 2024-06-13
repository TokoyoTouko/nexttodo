import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
		<div>
			<h1 className="text-xl font-bold text-green-400">Hello World</h1>
		</div>
	);
}
