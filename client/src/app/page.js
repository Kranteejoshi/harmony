import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Our Website</h1>
        <p className="mt-4 text-lg text-gray-600">
          We are glad to have you here. Explore our services and offerings.
        </p>
        <Image
          src="/images/welcome.jpg"
          alt="Welcome Image"
          width={500}
          height={300}
          className="mt-6 rounded-lg shadow-lg"
        />
        <div className="mt-6">
          <Link href="/register" className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
            Register Now
          </Link>
        </div>
      </main>
    </div>
  );
}
