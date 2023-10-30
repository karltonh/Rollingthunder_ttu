import React from "react";
import { Link } from "react-router-dom";

function TestApplication(){
    
    return(
        <div style={{ 
            backgroundImage: `url("https://i.imgur.com/Sk2SgVp.jpeg")`,
            width: window.screen.width,
            height: window.screen.height
          }}>
            <label class="qblabel">
                <textarea class="questionbox" rows={5} col={200} placeholder="Input Question"/>
                <button type="clear">Clear</button>
                <button type="submit">Submit</button>
            </label>
        </div>
    );
}

export default TestApplication;