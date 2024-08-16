import {Navbar, NavbarBrand, NavbarContent, NavbarItem,  Button} from "@nextui-org/react";
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
          <a href="/login" className="text-primary">Login</a>
        </NavbarItem>
        <NavbarItem>
          <Button color="primary" variant="flat">
          <a href="/signup">
            Sign Up
            </a>
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
