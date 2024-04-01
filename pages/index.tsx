import Head from "next/head";

export default function Index() {
    return (
        <>
            <link rel="mask-icon" href="/favicon.ico?v=M44lzPylqQ" 
 color="#000000"></link>
            <link rel="icon" href="/favicon.ico?v=M44lzPylqQ"></link>
            <Head>
                <title>Jenny's website</title>
                <meta name="description" content="Welcome to me portfolio"/>
            </Head>
            <div id="navbar">
                <span>Kyung Na Park</span>
            </div>
            <div id="container">
                <div id="top-section">
                    <img src="/logo.png" id="prof-pic"></img>
                    <h1>
                        Hi! <br></br> I'm _.
                    </h1>
                </div>
                <p>
                    <a href="/test">link to test page</a> <br></br>
                    <a href="/star jar">link to star jar</a>
                    I'm an artist based in Los Angeles interested in comics, music production, and creative writing.
                </p>
                <hr/>
                <p>Some shorts I've made</p>
                <div className="project-box">
                    <img src="/juice.png" alt="Apartment buildings against a yellow sky" />
                    <div className="badge"><span>Animated Short</span></div>
                </div>
            </div>
        </>
    );
}
