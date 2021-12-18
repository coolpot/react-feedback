import { useState, useContext } from "react";
import Button from './shared/Button';
import Card from "./shared/Card";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {

  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const { addFeedback } = useContext(FeedbackContext);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length >= 10) {
      const newFeedback = {
        text,
        rating
      };
      addFeedback(newFeedback);
      setText('');
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How do you rate your experience with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)}/>
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
