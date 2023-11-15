import React from "react";
import config from "./config";
import { Link } from "react-router-dom";
import image1 from "./images/image-from-rawpixel-id-3318351-original.jpg"
function TestApplication(){

    const [quesiton, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleQuestionChange = (event) => {
        setQuestion(event.target.value);
    }

    const handleClear = () => {
        setQuestion('');
        setAnswer('');
    }

    const handleSubmit = async () => {
        try {
            const response = await fetch(`${config.ngrokUrl}/ask`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: question }),
      });

      const result = await response.json();
      setAnswer(result.answer);
    } catch (error) {
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
                <button type="clear" onClick={handleClear}>Clear</button>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </label>
        <div>
            <strong>Answer:</strong> {answer}
        </div>
    </div>
    );
}

export default TestApplication;
