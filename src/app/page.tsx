import About from "@/components/About/About";
import Book from "@/components/Book/Book";
import Footer from "@/components/Footer/Footer";
import Gallery from "@/components/Gallery/Gallery";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import RememberWall from "@/components/RememberWall/RememberWall";
import Tributes from "@/components/Tributes/Tributes";

export default function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<About />
			<Book />
			<Tributes />
			<RememberWall />
			<Gallery />
			<Footer />
		</>
	);
}
