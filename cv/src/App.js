import React, { Component } from "react";
import Header from "./components/header";
import Summary from "./components/career_summary";
import Experience from "./components/experience";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <article className="resume-wrapper text-center position-relative">
          <div class="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
            <Header />
            <div className="resume-body p-5">
              <div className="row">
                <Summary />
                <Experience />
                <Sidebar />
              </div>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    );
  }
}

export default App;
