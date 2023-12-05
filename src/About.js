import React from "react";
import dependencies_image from "./images/dependencies.jpg"
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
                <h1 class="text-header">Implementation Plan</h1>
                <ul class="text">Our chosen testbed for code modification, testing, and updates is Google Colab, which allows group collaboration. The High-Performance Computing Center (HPCC) is critical for LLM training and testing. Python 3 serves as our programming language. GitHub provides version control, and the website, hosted on GitHub, showcases our system’s capabilities. </ul>
            </div>
        </section>
        <section class="section">
            <div class="textbox">
                <h1 class="text-header">Technical Details</h1>
                    <ul class="text">Integrating Hugging Face transformers for tokenization and loading the original Falcon 7B Instruct model.</ul>
                    <ul class="text">Use Hugging Face Supervised Fine-tuning Trainer for Fine-tuning a Falcon 7B Instruct model for better question-answering capabilities.</ul>
                    <ul class="text">Leveraging Lang Chain for importing vector databases and document manipulation.</ul>
                    <ul class="text">Using the Hugging Face all-MiniLM-L6-v2 transformer for embedding text to capture semantic information.</ul>
                    <ul class="text">Employing FAISS for managing a vector/embedding database to hold vectors created by the all-MiniLM-L6-v2.</ul>
                    <ul class="text">The goal is to  Implement Retrieval-augmented generation (RAG) for technical manual data.</ul>
                    <ul class="text">Handling user input related to Air Force Technical Order Management specifications and directions.</ul>
                    <ul class="text">Ensuring data traceability and accuracy verification of the output from the LLM.</ul>
            </div>
        </section>

        <section class="section">
            <div class="textbox">
                <h1 class="text-header">Python Packages:</h1>
                <div className="dependencies_image">
                    <div style={{ 'image': {dependencies_image} }}>
                        <img src={dependencies_image}/>
                    </div>
                    </div>
                    <ul class="text">bitsandbytes</ul>
                    <ul class="text">transformers</ul>
                    <ul class="text">langchain</ul>
                    <ul class="text">accelerate</ul>
                    <ul class="text">PyPDF2</ul>
                    <ul class="text">faiss-gpu</ul>
                    <ul class="text">sentence_transformers</ul>
                    <ul class="text">pypdf</ul>
                    <ul class="text">torch (version 2.1.0)</ul>
                    <ul class="text">flask and related packages (flask_ngrok, pyngrok)</ul>
            </div>
        </section>
        <section class="section">
            <div class="textbox">
                <h1 class="text-header">Fine-tune the model</h1>
                <ul class="text">To fine-tune the LLM to be modified use from trl import SFT Trainer. Split the PDFs into one text file and train a causal language model that tries to predict the next token given previous tokens. Load in the LLM model to be modified with the training data and train.</ul>
            </div>
        </section>
        <section class="section">
            <div class="textbox">
                <h1 class="text-header">Load PDF Documents</h1>
                <ul class="text">The script loads PDF documents from a specified path using the PyPDFLoader class from the langchain.document_loaders module.</ul>
            </div>
        </section>
        <section class="section">
            <div class="textbox">
                <h1 class="text-header">Text Processing and HuggingFaceEmbeddings using sentence-transformers/all-MiniLM-L6-v2</h1>
                <ul class="text">Text from the PDF pages is split into chunks using a RecursiveCharacterTextSplitter with specified parameters. The script then uses the HuggingFaceEmbeddings class to embed the text chunks. An instance of the HuggingFaceEmbeddings class is created with the model name set to 'sentence-transformers/all-MiniLM-L6-v2' and additional model arguments like 'device': 'cuda' for GPU acceleration. The all-MiniLM-L6-v2 transformer is employed to generate sentence embeddings from input text. These embeddings capture the semantic information in the text. Given an input text, it outputs a vector that captures the semantic information. The sentence vector may be used for information retrieval, clustering, or sentence similarity tasks. By default, input text longer than 256 word pieces is truncated.</ul>
            </div>
        </section>
        <section class="section">
            <div class="textbox">
                <h1 class="text-header">FAISS Vector Storage</h1>
                <ul class="text">Lang Chain is used to import the vector database FAISS. Vector representations of the text chunks are stored using the FAISS (Facebook AI Similarity Search) library.Vector/Embedding Database: FAISS is utilized to manage a vector/embedding database that stores vectors created by the all-MiniLM-L6-v2 transformer. This allows for efficient storage and retrieval of semantic vectors.</ul>
            </div>
        </section>
        <section class="section">
            <div class="textbox">
                <h1 class="text-header">Language Model Setup</h1>
                <ul class="text">The LLM - Large Language Model is loaded using the AutoModelForCausalLM class from the transformers library. The model is configured for quantization using the BitsAndBytesConfig to allow the LLM to run on lower-end hardware.model = AutoModelForCausalLM.from_pretrained("vilsonrodrigues/falcon-7b-instruct-sharded", quantization_config=bnb_config, trust_remote_code=True).Import a pre-trained tokenizer using transformers import AutoTokenizer AutoTokenizer.from_pretrained("vilsonrodrigues/falcon-7b-instruct-sharded"). Can be loaded with specific configurations, including max_new_tokens, do_sample, top_k, and </ul>
            </div>
        </section>
        <section class="section">
            <div class="textbox">
                <h1 class="text-header">Text Generation Pipeline</h1>
                <ul class="text">A text generation class pipeline is created using the pipeline function from the transformers library. The pipe class will use the LLM and the tokenizer will then generate new text based on the given input and the configured generation settings.</ul>
            </div>
        </section>
        <section class="section">
            <div class="textbox">
                <h1 class="text-header">Question Answering (QA) Setup</h1>
                <ul class="text">A QA system is set up using the RetrievalQA class from the langchain.chains module. from langchain.chains import RetrievalQA.qa = RetrievalQA.from_chain_type(llm=llm,chain_type="stuff",retriever=vectorstore.as_retriever search_kwargs=k : 3),return_source_documents=True, verbose=False,)It combines the language model, retriever, and other configurations for question answering. User questions are converted into vectors and used to search the vector database for relevant information. This chain utilizes the LLM, retains source documents for context, and interfaces with the vector database as a retriever to provide the LLM with context to produce a relevant answer to the user question. It also allows it to remember recent past questions the user asked.</ul>
            </div>
        </section>
        <section class="section">
            <div class="textbox">
                <h1 class="text-header">Flask Web Application</h1>
                <ul class="text">A new  Flask web application is created with an endpoint /ask that expects POST requests with JSON data containing a query. The query is passed to the QA system, and the result is returned as JSON. The script runs the Flask application. A print_result function is defined to display the results of the QA system, including the query, the result, and the source documents.</ul>
            </div>
        </section>
        <section class="section">
            <div class="textbox">
                <h1 class="text-header">Functionalities remaining to be completed</h1>
                    <ul class="text">Refine the LLM performance: Enhance the reliability and accuracy of returned answers. Due to the constraints of us being unable to use the TTU HPCC for this project we were relegated to using Google Collab’s free computational assets for the projects which greatly hinder the capability of the LLM due to the low amount of RAM. This lead to us having to load the LLM in 4-bit quantization and shard the LLM to reduce strain on the ram.</ul>
                    <ul class="text">User access level control: Stretch goal that wasn't met to add a conceptual access level control that would add/remove documents based on the user's access level</ul>
                    <ul class="text">Add vector Similarity of question and answer: Used to evaluate how well the LLM functions in returning an answer</ul>
                    <ul class="text">Website tips/loading bar/access level control dropdown: Improve user experience.</ul>
            </div>
        </section>
        <section class="section">
            <div class="textbox">
                <h1 class="text-header">Implementation/technical issue.</h1>
                    <ul class="text">The fine-tuned model runs out of memory in Google Colab due to training the model undoing the “sharding”, which results in the memory strain. </ul>
                    <ul class="text">Attempted to use prompt templates in order to receive better answers from the LLM without having to rely on training, but couldn't diagnose why the LLM would't acknowledge templates given to it.</ul>
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