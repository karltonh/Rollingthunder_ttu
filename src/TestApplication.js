import React, { useEffect, useState } from "react";
import config from "./config";
import { Link } from "react-router-dom";
import image1 from "./images/image-from-rawpixel-id-3318351-original.jpg";
import axios from "axios";
function TestApplication(){

    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [info, setInfo] = useState('');
    const url = 'https://1b69-34-125-223-52.ngrok.io/test'
    const answ = ""
    const handleQuestionChange = (event) => {
        setQuestion(event.target.value);
    }
    const handleInfoChange = (event) => {
        setInfo(event.target.value);
    }
    const handleClear = () => {
        setQuestion('');
        setAnswer('');
        setInfo('')
    }

    const handleSubmit = async () => {
        setAnswer("Fetching Answer...")
        setInfo('<query result source information>')
        try {
          const response = await fetch("https://1694-34-125-223-52.ngrok.io/test", {method: 'POST', headers: {'Content-Type': 'text/plain'}, body: JSON.stringify({query: question })}).then(response => response.json());
          //const response = await fetch(url, {
           // method: "POST",
            //headers: {
          //'Content-Type': 'application/json',
        //},
        //body: JSON.stringify({query: question }),
      //});

      const result = String(response.result);
      const source = String(response.source);
      setAnswer(result.trim());
      setInfo(source.trim())
    } catch (error) {
      setAnswer("Server is down :(")
      console.error('Error submitting question:', error);
    }
  };
    
    return(
        <div style={{ 
            backgroundImage: `url(${image1})`,
            width: window.screen.width,
            height: window.screen.height
          }}>
            <label class="qblabel">
                <textarea 
                    class="questionbox" 
                    rows={5}  
                    cols={200} 
                    placeholder="Input Question"
                    value={question}
                    onChange={handleQuestionChange}
                />
                <button type="submit" onClick={handleSubmit}>Submit</button>
                <button type="clear" onClick={handleClear}>Clear</button>
            </label>
        <div>
        <textarea 
                    class="answerbox" 
                    rows={5}  
                    cols={200} 
                    placeholder='ANSWER'
                    value={answer}
                    onChange={handleQuestionChange}
                    disabled='true'
                />
        <textarea 
                    class="infobox" 
                    rows={5}  
                    cols={200} 
                    placeholder='INFO'
                    value={info}
                    onChange={handleInfoChange}
                    disabled='true'
                />
        </div>
    </div>
    );
}

export default TestApplication;
