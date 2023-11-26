import React from "react";

function About(){
    return(
    <div>
        <h1 class="page-header">ABOUT</h1>
        <section class="section">
            <div class="textbox">
                <h1 class="text-header">Project Goals</h1>
                <p class="text">The goal of this project is to provide a Large Language Model (LLM) that has the capability to search and implement Air Force Technical Order Management specifications and directions.
Customer - Lockheed Martin</p>
            </div>
        </section>
        <section class="section">
            <div class="textbox">
                <h1 class="text-header">Project Requirements</h1>
                <ul class="text">Question/Answer capability</ul>
                <ul class="text">Accuracy verification capability (no hallucinations)</ul>
                <ul class="text">Traceability of data source (indicated in responses)</ul>
                <ul class="text">Respond to user input after 3 seconds.</ul>
            </div>
        </section>
        <section class="section">
            <div class="textbox">
                <h1 class="text-header">Implementation tools</h1>
                <ul class="text">For the LLM we decided to use falcon-7b-instruct. (from Hugging Face). Import a tokenizer from Hugging Face as well.</ul>
                <ul class="text">Facebook AI Similarity Search (Faiss) for vector database.(Store database on local hard drive)</ul>
                <ul class="text">Github / Google Colab for code development</ul>
                <ul class="text">High Performance Computing Center(HPCC) matador partition  to run the program and to implement finetuneing on the falcon model</ul>
                <ul class="text">Frontend implementation with REACT</ul>

            </div>
        </section>
        <section class="section">
            <div class="textbox">
                <h1 class="text-header">Implementation Method</h1>
                    <ul class="text">The Testbed we are planning to use is Google Colab for changing, testing, and updating the code and for collaboration.The High Performance Computing Center (HPCC) will be used for training the LLM and testing the LLM. The programming language will be Python 3.Github will be used for version control. The website will be hosted on Github for demonstration purposes. </ul>
                    <ul class="text">The implementation will be divided into 3 sections as follows; Initial implementation will include base capability of the website (Accepting queries, relaying information between the website and semantic search/LLM, and displaying answers), capability of the semantic search (tokenization/vectorization of questions, searching the database for info using the tokenized questions, and providing the question and documents to the LLM), and capability of the LLM to generate an answer of relative reliability from the documents and question.</ul>
                    <ul class="text">The second phase of implementation involves tweaking and training the LLM to give more reliable and better answers based on the question and documents given.</ul>
                    <ul class="text">The last phase of implementation would be cleaning up our existing structures, adding finishing touches, and implementing stretch goals (helpful tips on website, access level control, etc.) </ul>

            </div>
        </section>

        <section class="section">
            <div class="textbox">
                <h1 class="text-header">System analysis and decomposition:</h1>
                    <ul class="text">The Display Website class shall allow the user to enter questions and shall be able to receive an answer from an LLM with any relevant info from a document. A stretch goal class shall be an authentication class that shall allow the user to access relevant info and PDFs depending on their access level.</ul>
                    <ul class="text">The Semantic Search class shall be able to receive a String question from the Display Website class and shall be able to use the vectorize question class to turn the String Question into a Vector representation of that question. Semantic Search shall be able to vectorize a set of documents from the document class and store those as a vector database in the document class. Semantic Search shall then be able to use the vector question and search the document class that contains a vector database for any vectors that are relevant to the question and shall return the string info and shall then provide the relevant info to the Modified LLM class.</ul>
                    <ul class="text">The Document class shall contain relevant documents needed for the LLM and shall also contain those documents in a vector database. The Document class shall be able to add/remove/update documents to the document database.</ul>
                    <ul class="text">The Modified LLM class shall be able to take the question and relevant documents and produce a string answer relevant to the question and use the return answer to website function to return the string LLM answer back to the websit</ul>
                    <ul class="text">The Accuracy Verification class shall be able to take the string LLM answer and the string relevant document info and shall be able to vectorize both strings and compare how similar they are.</ul>
            </div>
        </section>
        <section class="section">
            <div class="textbox">
                <h1 class="text-header">Sources</h1>
                <ul class="text">“🤗 PEFT.” GitHub, 18 May 2023, github.com/huggingface/peft.</ul>
                <ul class="text">“balapv.“ Retrieval Augmented Generation Using Azure Machine Learning Prompt Flow (Preview) - Azure Machine Learning.” Learn.microsoft.com, 31 July 2023, learn.microsoft.com/en-us/azure/machine-learning/concept-retrieval-augmented-generation?view=azureml-api-2. </ul>
            </div>
        </section>
        
    </div>
    );
}


export default About;