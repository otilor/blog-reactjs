import Nav from "./Nav";

export default function Layout({children}) {
    return (
        <div className="mx-6 md:maxx-w-2xl md:mx-auto font-poppins">
            <Nav />
            <main>{children}</main>
        </div>
    );
}