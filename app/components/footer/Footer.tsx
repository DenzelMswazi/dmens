import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";

const Footer = () => {
    return (
      <footer className="bg-black text-white text-sm mt-16">
        <Container>
          <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
            <FooterList>
              <h3>Team Categories</h3>
              <Link href={"#"}>MUFC</Link>
              <Link href={"#"}>Arsenal</Link>
              <Link href={"#"}>Liverpool</Link>
              <Link href={"#"}>Manchester city</Link>
              <Link href={"#"}>Chelsea</Link>
              <Link href={"#"}>Real madrid</Link>
            </FooterList>
          </div>
        </Container>
        </footer>
    );
}
export default Footer;