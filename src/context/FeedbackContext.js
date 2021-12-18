import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
  const [feedback, setFeedback] = useState([
    {
      id: '46b50031-a4b3-4363-928a-a6c67ae47978',
      rating: 10,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    },
    {
      id: '2e59af61-c383-440e-b704-aacb490ba892',
      rating: 9,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    },
    {
      id: 'cb623404-8c5e-481d-bf96-546ef58c1033',
      rating: 8,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    },
  ]);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };


  return <FeedbackContext.Provider value={{
    feedback,
    deleteFeedback,
    addFeedback
  }}>
    {children}
  </FeedbackContext.Provider>
}


export default FeedbackContext;