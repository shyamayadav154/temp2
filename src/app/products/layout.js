import Footer from "@/components/footer";
import { NavLat } from "@/components/nav-lat";
import NavBarTui from "@/components/navtui";

export default function ProductsLayout({
    children, // will be a page or nested layout
}) {
    return (
        <section className="grid grid-rows-[auto_1fr_auto]">
            <NavLat/>
            {/* <NavBarTui/> */}
            <div className="mb-20"/>
            {children}
            <div className="mb-20"/>
            <Footer/>
        </section>
    )
}
