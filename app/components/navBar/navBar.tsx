import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Link from "next/link";
import styles from "./navBar.module.css";

interface MyWebsiteNavBarProps {
    activeTab: string;
  }

const MyWebsiteNavBar = ({ activeTab }: MyWebsiteNavBarProps) => {
    return (
        <Navbar className={styles.navBarBackground} fluid rounded>
            <NavbarBrand href="/">
                <span className={`self-center whitespace-nowrap text-xl font-semibold dark:text-white ${styles.navBarFont}`}>Benjamin Yan</span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                <NavbarLink className={styles.navBarFont} active={activeTab === 'about-me'} href="/about-me">About Me</NavbarLink>
                <NavbarLink className={styles.navBarFont} active={activeTab === 'projects'} href="/projects">Projects</NavbarLink>
                <NavbarLink className={styles.navBarFont} active={activeTab === 'connect'} href="/connect">Connect</NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
}

export default MyWebsiteNavBar;