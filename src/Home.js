import React from "react";
import { Link } from "react-router-dom";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import image1 from "./images/classdiagram.jpg"
import image2 from "./images/usecasediagram.jpg"
import image3 from "./images/UseCaseDiagramLLMUpdated2.jpg"

function Home(){

    
    return(
    <div>
        <h1 class="page-header">LLM Assisted Technical Order Management Tool</h1>

        <section class="section">
            <div class="textbox">
                <h1 class="text-header">Objective</h1>
                <p class="text">Provide an LLM capability to search and implement Air Force Technical Order Management specifications and directions</p>
            </div>
        </section>
        <section class="section">
            <div class="textbox">
                <h1 class="text-header">Project description</h1>
                <p class="text">The scope of the project is modifying and utilizing an LLM to answer user questions about information found within Air Force technical manuals. This will be done by utilizing retrieval augmented generation (RAG) architecture and fine-tuning an LLM to smart search the included manuals and provide back a sourceable answer containing the most relevant information.
The user will access the LLM through our website. The website will allow the user to input questions relating to Air Force Technical Order Management specifications and directions. The server looks up relevant document data and supplies the LLM with the question and relevant documents. A modified LLM trained to better handle Order specifications produces text that accurately answers the user question. The LLM answer should include relevant document data and provide the source. LLM answers should be checked for accuracy.
            </p>
            </div>
        </section>
    <div>
    <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': {image1} }}>
                <img src={image1}/>
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': {image2} }}>
                    <img src={image2}/>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': {image3} }}>
                    <img src={image3}/>
                </div>
            </div>
        </Slide>
    </div>
    </div>
    );
}

export default Home;