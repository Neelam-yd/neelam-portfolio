import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-black">
      <nav className="flex justify-between items-center px-10 py-4 mx-10 my-5 bg-gray-900 text-white rounded-md sticky top-0 z-50">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-orange-500 mx-10 ml-15">
          Neelam Yadav
        </h1>

        {/* Links */}
        <ul className="text-xl flex space-x-6">
          <li>
            <Link href="/about" className="hover:text-orange-400 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/skills" className="hover:text-orange-400 transition">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-orange-400 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/experience" className="hover:text-orange-400 transition">
              Experience
            </Link>
          </li>
        </ul>

        {/* Contact Button */}
        <Link
          href="/contact"
          className="bg-orange-500 text-black px-4 py-2 rounded-xl hover:bg-orange-600 transition"
        >
          Contact Me
        </Link>
      </nav>
    </div>
  );
}