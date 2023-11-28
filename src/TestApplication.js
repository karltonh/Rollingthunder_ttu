import React, { useEffect, useState } from "react";
import config from "./config";
import { Link } from "react-router-dom";
import image1 from "./images/image-from-rawpixel-id-3318351-original.jpg";
import axios from "axios";
function TestApplication(){

    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const url = 'https://bb78-34-67-45-211.ngrok-free.app/test'
    const answ = ""
    const handleQuestionChange = (event) => {
        setQuestion(event.target.value);
    }

    const handleClear = () => {
        setQuestion('');
        setAnswer('');
    }

    const handleSubmit = async () => {
        setAnswer("Fetching Answer...")
        try {
          const response = await fetch("https://03a4-35-233-200-74.ngrok-free.app/test", {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({query: question })}).then(response => response.json());
          //const response = await fetch(url, {
           // method: "POST",
            //headers: {
          //'Content-Type': 'application/json',
        //},
        //body: JSON.stringify({query: question }),
      //});

      const result = response.result;
      setAnswer(result.trim());
    } catch (error) {
      setAnswer("Server is down :C")
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
        </div>
    </div>
    );
}

export default TestApplication;
