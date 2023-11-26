import React from "react";

function Interviews(){
    return(
    <div>
        <h1 class="page-header">INTERVIEW LOG AND SUMMARY</h1>
        <section class="section">
            <div class="textbox">
                <h1 class="text-header">Interview 1</h1>
                <ul>
                    <p class="text">Q: Current problems with Air Force Technical Order Management specifications and directions?
                        <ul>A: No current LLM exists. Difficult to locate info quickly.</ul></p>
                    <p class="text">Q: What hardware will the user have access to? What hardware will the program run on? What  Software environment will it run on (Windows or Linux, can we use any version of Python?)
                        <ul>A: Up to us, no preference for Windows/Linux. Make it as a web application.</ul></p>
                    <p class="text">Q: Roughly, how fast does it need to give an answer back?
                        <ul>A: No hard limit, expected to take a few seconds to return a response. 3 seconds. adding a progress bar avoids this limit.</ul></p>
                    <p class="text">Q: How large/specific can the answers be?
                        <ul>A: Can be short or long, not specified. Pursue w/e answer is most appropriate. If the short answer is better, do that, if longer is better, do that.</ul></p>
                    <p class="text">Q: How should multiple inquiries be handled?
                        <ul>A: Preferably, ask questions one at a time. Do not allow multiple questions as input.</ul></p>
                    <p class="text">Q: How often do aircrafts have the same solution/parts/steps to fix an issue?
                        <ul>A: Are pretty similar, different teams work on different aircraft. There are differences in the answers, shouldn’t be things that are the same answer-wise but similar.</ul></p>
                    <p class="text">Q: What would be a common Inquiry and what would be a reasonable response?
                        <ul>A: something specific like what is the definition of a maintenance code and receiving the answer to such code.</ul></p>
                    <h2 class ="text-subheader">Summary</h2>
                    <ul class="text">
                        <p>No current LLM exists to quickly fetch information from Air Force TO manuals to people who need the information. A web application that can retrieve individual questions in under 3 seconds would be of great use to multiple departments inside the Air Force. It would help give access to many departments and would help improve efficiency. The most appropriate and useful answer is always going to be the best. It will be generally locating codes or definitions for practical use such as what’s the definition of a certain maintenance code. Can include extra manuals as a stretch goal.</p>
                    </ul>
                </ul>
 
            </div>
        </section>
        <section class="section">
            <div class="textbox">
                <h1 class="text-header">Interview 2</h1>
                <ul>
                    <p class="text">Q: We were thinking about using Falcon 7B because it performs well compared to similar models, can be used without any royalties or restrictions, and is a good medium point only needing 16 gb of memory. Do you think this is a good idea?
                        <ul>A: No issues, completely fine.</ul></p>
                    <p class="text">Q: We plan on using Langchain to vectorize and index the database. It seems to be the most robust and widely used framework and helps future-proof any issues or new ideas. Is this okay?
                        <ul>A: 100%, Langchain sounds good for getting the vector database up and running.</ul></p>
                    <p class="text">Q: Would including a user guide as a way to utilize prompt engineering for more standardized results be a good idea? This would be either above the textbox users input questions into or as a dropdown.
                        <ul>A: Yeah, that sounds like a good idea.</ul></p>
                    <p class="text">Q: Would using Indexing/Retrieval Augmented Generation(RAG) be better than fine tuning? It has the advantages of source-citing, less hallucinations, no downtime for adding new manuals/updating manuals, and personalized answers/access restriction.
                        <ul>A: That sounds really good, a perfect fit for the project</ul></p>
                    <p class="text">Q: Would you be interested in including a rudimentary “access level” tool as a stretch goal? Users would select an access level to include/exclude certain technical manuals. For future use, certain manuals may be restricted/confidential documents.
                        <ul>A: Some type of access control is an excellent idea, frequently brought up on projects. Make it a stretch goal. Proof of concept works well for the purpose. (Proof of concept being toggles for access control, click box/slider for Level 1/2/3 access.)</ul></p>
                    <p class="text">Q: We are currently hosting the website on github as a tab under our student project page. Assuming everything implements and connects well we plan to keep it this way.Is this fine?
                        <ul>A: Yes, that would be fine.</ul></p>
                    <h2 class ="text-subheader">Summary</h2>
                    <ul class = "text">
                        <p>The LLM we are using is going to be Falcon 7B because there aren’t any restrictions and only requires 16 GB of memory. We will be using Langchain for indexing and vectorizeing our database. We’re planning on adding a user guide for better search results in the search window. We will as well be using RAG with fine tuning, it has advantages such as source-citing, fewer hallucinations, and much more. We’re hosting the website on GitHubfor the project. We have a stretch goal of adding a type of access control for which manuals people can have access to.</p>
                    </ul>   
                </ul>

            </div>
        </section>
        
    </div>
    );
}

export default Interviews;