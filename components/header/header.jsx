import Image from "next/image";

function Header() {
	return <Image src="/asset" alt="logo" fill className="pointer-events-none w-full object-contain px-5" />
}
export {Header};