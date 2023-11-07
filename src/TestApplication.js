import React from "react";
import { Link } from "react-router-dom";
import image1 from "./images/image-from-rawpixel-id-3318351-original.jpg"
function TestApplication(){
    
    return(
        <div style={{ 
            backgroundImage: `url(${image1})`,
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