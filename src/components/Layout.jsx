
import Head from "next/head";
import { Footer } from ".";
import { Navbar } from ".";

function Layout({children}) {
    return ( 
        <>
        <div className="layout">
            <Head>
                <title>ECommerce Website</title>
            </Head>
            <header>
                <Navbar />
            </header>
            <main className="main-container" >
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
        
        </>
     );
}

export default Layout;