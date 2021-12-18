import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
  const [feedback, setFeedback] = useState([
    {
      id: '46b50031-a4b3-4363-928a-a6c67ae47978',
      rating: 10,
      text: 'Feeback Item 1 is here',
    },
    {
      id: '2e59af61-c383-440e-b704-aacb490ba892',
      rating: 9,
      text: 'Feedback item 2 is here',
    },
    {
      id: 'cb623404-8c5e-481d-bf96-546ef58c1033',
      rating: 8,
      text: 'Feedback item 3 is here too!',
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  });

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    });
  }

  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => item.id === id ? { ...item, ...updItem } : item))
  }


  return <FeedbackContext.Provider value={{
    feedback,
    deleteFeedback,
    addFeedback,
    editFeedback,
    feedbackEdit,
    updateFeedback
  }}>
    {children}
  </FeedbackContext.Provider>
}


export default FeedbackContext;