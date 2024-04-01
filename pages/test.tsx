export default function Test() {
    return (
        <>
            <h1> Test page!</h1>
            <p>This is a second test page to demonstrate how NextJS turns files into pages.</p>
            <div id="box">
                <p>Here is a box with a demo model</p>
                <p>Here are some <span>elements that stack </span>
                <button>left to right</button> 
                <a href="/">link to home</a>
            </p>
            </div>

            <div id="fullheight">
                <p className="box">A thing</p>
                <p className="box">Putting another thing in a row</p>
                <p className="box">Putting a third thing in a row</p>
            </div>

            <div id="flexxx">
                <p className="box">Putting one thing in a row</p>
                <p className="box">Putting another thing in a row</p>
                <p className="box">Putting a third thing in a row</p>
            </div>
        </>
    );
}
