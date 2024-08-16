import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { GiSpookyHouse } from "react-icons/gi";
export default function NavbarNew() {
  return (
    <Navbar shouldHideOnScroll>
        
      <NavbarBrand>
        <GiSpookyHouse className="w-9 h-9 mx-2"/>
        <a href="/" className="font-bold text-inherit">HOUSE HUB</a>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/signup" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
