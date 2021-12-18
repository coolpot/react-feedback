import { useState } from "react";
import Button from './shared/Button';
import Card from "./shared/Card";


function FeedbackForm() {

  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleTextChange = ({target: {value}}) => {
    if (value === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (value !== '' && value.trim().length < 10) {
      setBtnDisabled(true);
      setMessage('Text must be at least 10 Chars');
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(value);
  };

  return (
    <Card>
      <form>
        <h2>How do you rate your experience with us?</h2>
        <div className="input-group">
          <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text}/>
          <Button type="submit" version="secondary" isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
