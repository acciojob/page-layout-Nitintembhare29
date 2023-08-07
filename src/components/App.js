
import React from "react";
import './../styles/App.css';
import PageLayout from "./PageLayout";

const App = () => {
  return (
    <div>
        <PageLayout header={<h1>Welcome to my website</h1>} footer={<p><span>&#169;</span> 2023 My Website. All rights reserved.</p>}>
          <P>This is the content of my website.</P>
        </PageLayout>
    </div>
  )
}

export default App
