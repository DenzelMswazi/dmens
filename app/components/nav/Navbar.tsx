import Link from "next/link";
import Container from "../Container";
import { Plus_Jakarta_Sans } from "next/font/google";

const plus_Jakarta_Sans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["800"]});

const Navbar = () => {
    return (
      <div className="sticky top-0 w-full bg-slate-200 z-30 shadow-sm">
        <div className="py-4 border-b-[1px]">
          <Container>
            <div className="flex items-center justify-between gap-3 md:gap-0">
              <Link href={"/"} className={`${plus_Jakarta_Sans.className} font-extrabold text-2xl text-black`}>DMENS GIFT SHOP</Link>
              <div className="hidden md:block">Search Products</div>
              <div className="flex items-center gap-8 md:gap-12">
                <div>CartCount</div>
                <div>UserMenu</div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
}
export default Navbar;