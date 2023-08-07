
import React from "react";
import './../styles/App.css';
import PageLayout from "./PageLayout";

const App = () => {
  return (
    <div>
        <header>Welcome to my website</header>
        <PageLayout>
          <P>This is the content of my website.</P>
        </PageLayout>
        <footer><span>&#169;</span> 2023 My Website. All rights reserved.</footer>
    </div>
  )
}

export default App
