import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { MdFacebook } from "react-icons/md";
import { AiFillInstagram, AiFillTikTok, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
    return (
      <footer className="bg-black text-white text-sm mt-16">
        <Container>
          <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
            <FooterList>
              <h3 className="text-base font-bold mb-2">Team Categories</h3>
              <Link href={"#"}>MUFC</Link>
              <Link href={"#"}>Arsenal</Link>
              <Link href={"#"}>Liverpool</Link>
              <Link href={"#"}>Manchester city</Link>
              <Link href={"#"}>Chelsea</Link>
              <Link href={"#"}>Real madrid</Link>
            </FooterList>
            <FooterList>
              <h3 className="text-base font-bold mb-2">Customer Service</h3>
              <Link href={"#"}>Contact Us</Link>
              <Link href={"#"}>Shipping policy</Link>
              <Link href={"#"}>Returns & Exchanges</Link>
              <Link href={"#"}>FAQs</Link>
            </FooterList>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-base font-bold mb-2">About Us</h3>
              <p className="mb-2">Score Style Goals with Dmens: Your Ultimate Jersey Destination!</p>
              <p>&copy; {new Date().getFullYear()} DMENS. All rights reserved</p>
            </div>
            <FooterList>
              <h3 className="text-base font-bold mb-2">Follow Us</h3>
              <div className="flex gap-2">
                <Link href={"#"}>
                  <MdFacebook size={24}/>
                </Link>
                <Link href={"#"}>
                  <AiFillTwitterCircle size={24}/>
                </Link>
                <Link href={"#"}>
                  <AiFillInstagram size={24}/>
                </Link>
                <Link href={"#"}>
                  <AiFillTikTok size={24}/>
                </Link>
              </div>
            </FooterList>
          </div>
        </Container>
        </footer>
    );
}
export default Footer;