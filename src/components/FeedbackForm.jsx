import { useState } from "react";
import Button from './shared/Button';
import Card from "./shared/Card";


function FeedbackForm() {

  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Card>
      <form>
        <h2>How do you rate your experience with us?</h2>
        <div className="input-group">
          <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text}/>
          <Button type="submit" version="secondary">Send</Button>
        </div>
      </form>
    </Card>
  )
}

export default FeedbackForm
