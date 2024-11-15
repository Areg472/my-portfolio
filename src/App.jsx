import './App.css'
import MetaTags from "./components/MetaTags.jsx";

console.log("Portfolio site loaded");

function App() {
  return (
    <>
        <MetaTags
            title={"Aregtheeditor"}
            description="Areg's small little corner in the internet :3"
            name="Aregtheeditor"
            image="https://utfs.io/f/thKihuQxhYcPnE4P0fJqSrG7F3ilObYXHjDPRupZ6a15IhtQ"
        />
        <body id="body">
        <div className="container">
            <h1>Aregtheeditor</h1>
            <h2>Youtuber, video editor, developer</h2>
            <div className="card">
                <img className="pfp" src="https://utfs.io/f/thKihuQxhYcPnE4P0fJqSrG7F3ilObYXHjDPRupZ6a15IhtQ" width="8" alt="Profile Picture"/>
                <div className="videos">
                    <div className="video">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/st007EZniyU"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        <p>Ocean+ trailer</p>
                    </div>
                    <div className="video secondvid">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/6X45_n83idI"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        <p>Jane ruins the ship trip/grounded</p>
                    </div>
                </div>
            </div>
            <div className="social-links">
                <a href="#"><i className="bi bi-instagram"></i></a>
                <a href="#"><i className="bi bi-facebook"></i> </a>
                <a href="#"><i className="bi bi-twitter-x"></i></a>
            </div>
        </div>
        <a href="https://github.com/Pirkisek" target="_blank"><p className="credit">Made with @pirkisek</p></a>
        </body>
    </>
  )
}

export default App
