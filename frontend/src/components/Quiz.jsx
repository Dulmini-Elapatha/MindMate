import React, { useState } from "react";
import "./Quiz.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
    question7: "",
    question8: "",
    question9: "",
    question10: "",
    question11: "",
    question12: "",
    question13: "",
    question14: "",
    question15: "",
    question16: "",
    question17: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
        <Navbar />
        <div className="form">
         <h2><b>Quiz</b></h2>
      <hr />
      <br />
        <div className="question-box">
            <form onSubmit={handleSubmit}>
            <label htmlFor="question1">1. What is your age?</label>
            <input
                type="number"
                id="question1"
                name="question1"
                value={formData.question1}
                placeholder="Enter your age"
                onChange={handleChange}
                required
            />
            </form>
        </div>
        <br />
        <div className="question-box">
        <form onSubmit={handleSubmit}>
        <label htmlFor="question2">2. What is your gender?</label>
        <select
          id="question2"
          name="question2"
          value={formData.question2}
          onChange={handleChange}
          required
        >
          <option value="">Select...</option>
          <option value="1">Male</option>
          <option value="2">Female</option>
          <option value="3">Prefer Not to Say</option>
        </select>
        </form>
        </div>
        <br />
        <div className="question-box">
        <form onSubmit={handleSubmit}>
        <label htmlFor="question3">3. What is your relationship status?</label>
        <select
          id="question3"
          name="question3"
          value={formData.question3}
          onChange={handleChange}
          required
        >
          <option value="">Select...</option>
          <option value="1">Single</option>
          <option value="2">Married</option>
          <option value="3">Divorced</option>
          <option value="4">In a relationship</option>
        </select>
        </form>
        </div>
        <br />
        <div className="question-box">
        <form onSubmit={handleSubmit}>
        <label htmlFor="question4">4. What is your occupation status?</label>
        <select
          id="question4"
          name="question4"
          value={formData.question4}
          onChange={handleChange}
          required
        >
          <option value="">Select...</option>
          <option value="1">University Student</option>
          <option value="2">School Student</option>
          <option value="3">Salaried Worker</option>
          <option value="4">Retired</option>
        </select>
        </form>
        </div>
        <br />
        <div className="question-box">
        <form onSubmit={handleSubmit}>
        <label htmlFor="question5">
          5. Do you use social media?
          <br />
          <input
            type="radio"
            id="question5-yes"
            name="question5"
            value="yes"
            onChange={handleChange}
          />
          Yes
          <br />
          <input
            type="radio"
            id="question5-no"
            name="question5"
            value="no"
            onChange={handleChange}
          />
          No
        </label>
        </form>
        </div>
        <br />
        <div className="question-box">
        <form onSubmit={handleSubmit}>
        <label htmlFor="question6">
          6. What social media platforms do you commonly use?
          <br />
          <input
            type="checkbox"
            id="question6-fb"
            name="question6"
            value="facebook"
            onChange={handleChange}
          />
          Facebook
          <br />
          <input
            type="checkbox"
            id="question6-twi"
            name="question6"
            value="twitter"
            onChange={handleChange}
          />
          Twitter
          <br />
          <input
            type="checkbox"
            id="question6-ig"
            name="question6"
            value="instergram"
            onChange={handleChange}
          />
          Instergram
          <br />
          <input
            type="checkbox"
            id="question6-yt"
            name="question6"
            value="toutube"
            onChange={handleChange}
          />
          Youtube
          <br />
          <input
            type="checkbox"
            id="question6-snap"
            name="question6"
            value="snapchat"
            onChange={handleChange}
          />
          Snapchat
          <br />
          <input
            type="checkbox"
            id="question6-dis"
            name="question6"
            value="discord"
            onChange={handleChange}
          />
          Discord
          <br />
          <input
            type="checkbox"
            id="question6-redd"
            name="question6"
            value="reddit"
            onChange={handleChange}
          />
          Reddit
          <br />
          <input
            type="checkbox"
            id="question6-pri"
            name="question6"
            value="printerest"
            onChange={handleChange}
          />
          Printerest
          <br />
          <input
            type="checkbox"
            id="question6-tt"
            name="question6"
            value="tiktok"
            onChange={handleChange}
          />
          Tiktok
        </label>
        </form>
        </div>
        <br />
        <div className="question-box">
        <form onSubmit={handleSubmit}>
        <label htmlFor="question7">
          7. What is the average time you spend on social media everyday?
          <br />
          <input
            type="radio"
            id="question7-less1"
            name="question7"
            value="less1"
            onChange={handleChange}
          />
          Less than an hour
          <br />
          <input
            type="radio"
            id="question7-1-2"
            name="question7"
            value="1-2"
            onChange={handleChange}
          />
          1 - 2 hours
          <br />
          <input
            type="radio"
            id="question7-2-3"
            name="question7"
            value="2-3"
            onChange={handleChange}
          />
          2 - 3 hours
          <br />
          <input
            type="radio"
            id="question7-3-4"
            name="question7"
            value="3-4"
            onChange={handleChange}
          />
          3 - 4 hours
          <br />
          <input
            type="radio"
            id="question7-more5"
            name="question7"
            value="more5"
            onChange={handleChange}
          />
          More than 5 hours
        </label>
        </form>
        </div>
        <br />
        <div className="question-box">
        <form onSubmit={handleSubmit}>
        <label htmlFor="question8">
          8. On a scale of 1 to 5, how often do you find yourself using Social
          media without a specific purpose?
          <br />
          <input
            type="radio"
            id="question8-1"
            name="question8"
            value="1"
            onChange={handleChange}
          />
          1
          <br />
          <input
            type="radio"
            id="question8-2"
            name="question8"
            value="2"
            onChange={handleChange}
          />
          2
          <br />
          <input
            type="radio"
            id="question8-3"
            name="question8"
            value="3"
            onChange={handleChange}
          />
          3
          <br />
          <input
            type="radio"
            id="question8-4"
            name="question8"
            value="4"
            onChange={handleChange}
          />
          4
          <br />
          <input
            type="radio"
            id="question8-5"
            name="question8"
            value="5"
            onChange={handleChange}
          />
          5
        </label>
        </form>
        </div>
        <br />
        <div className="question-box">
        <form onSubmit={handleSubmit}>
        <label htmlFor="question9">
          9. On a scale of 1 to 5, do you feel restless if you haven't used
          Social media in a while?
          <br />
          <input
            type="radio"
            id="question9-1"
            name="question9"
            value="1"
            onChange={handleChange}
          />
          1
          <br />
          <input
            type="radio"
            id="question9-2"
            name="question9"
            value="2"
            onChange={handleChange}
          />
          2
          <br />
          <input
            type="radio"
            id="question9-3"
            name="question9"
            value="3"
            onChange={handleChange}
          />
          3
          <br />
          <input
            type="radio"
            id="question9-4"
            name="question9"
            value="4"
            onChange={handleChange}
          />
          4
          <br />
          <input
            type="radio"
            id="question9-5"
            name="question9"
            value="5"
            onChange={handleChange}
          />
          5
        </label>
        </form>
        </div>
        <br />
        <div className="question-box">
        <form onSubmit={handleSubmit}>
        <label htmlFor="question10">
          10. On a scale of 1 to 5, how easily distracted are you?
          <br />
          <input
            type="radio"
            id="question10-1"
            name="question10"
            value="1"
            onChange={handleChange}
          />
          1
          <br />
          <input
            type="radio"
            id="question10-2"
            name="question10"
            value="2"
            onChange={handleChange}
          />
          2
          <br />
          <input
            type="radio"
            id="question10-3"
            name="question10"
            value="3"
            onChange={handleChange}
          />
          3
          <br />
          <input
            type="radio"
            id="question10-4"
            name="question10"
            value="4"
            onChange={handleChange}
          />
          4
          <br />
          <input
            type="radio"
            id="question10-5"
            name="question10"
            value="5"
            onChange={handleChange}
          />
          5
        </label>
        </form>
        </div>
        <br />
        <div className="question-box">
        <form onSubmit={handleSubmit}>
        <label htmlFor="question11">
          11. On a scale of 1 to 5, how much are you bothered by worries?
          <br />
          <input
            type="radio"
            id="question11-1"
            name="question11"
            value="1"
            onChange={handleChange}
          />
          1
          <br />
          <input
            type="radio"
            id="question11-2"
            name="question11"
            value="2"
            onChange={handleChange}
          />
          2
          <br />
          <input
            type="radio"
            id="question11-3"
            name="question11"
            value="3"
            onChange={handleChange}
          />
          3
          <br />
          <input
            type="radio"
            id="question11-4"
            name="question11"
            value="4"
            onChange={handleChange}
          />
          4
          <br />
          <input
            type="radio"
            id="question11-5"
            name="question11"
            value="5"
            onChange={handleChange}
          />
          5
        </label>
        </form>
        </div>
        <br />
        <div className="question-box">
        <form onSubmit={handleSubmit}>
        <label htmlFor="question12">
          12. On a scale of 1 to 5, do you find it difficult to concentrate on
          things?
          <br />
          <input
            type="radio"
            id="question12-1"
            name="question12"
            value="1"
            onChange={handleChange}
          />
          1
          <br />
          <input
            type="radio"
            id="question12-2"
            name="question12"
            value="2"
            onChange={handleChange}
          />
          2
          <br />
          <input
            type="radio"
            id="question12-3"
            name="question12"
            value="3"
            onChange={handleChange}
          />
          3
          <br />
          <input
            type="radio"
            id="question12-4"
            name="question12"
            value="4"
            onChange={handleChange}
          />
          4
          <br />
          <input
            type="radio"
            id="question12-5"
            name="question12"
            value="5"
            onChange={handleChange}
          />
          5
        </label>
        </form>
        </div>
        <br />
        <div className="question-box">
        <form onSubmit={handleSubmit}>
        <label htmlFor="question13">
          13. On a scale of 1-5, how often do you compare yourself to other
          successful people through the use of social media?
          <br />
          <input
            type="radio"
            id="question13-1"
            name="question13"
            value="1"
            onChange={handleChange}
          />
          1
          <br />
          <input
            type="radio"
            id="question13-2"
            name="question13"
            value="2"
            onChange={handleChange}
          />
          2
          <br />
          <input
            type="radio"
            id="question13-3"
            name="question13"
            value="3"
            onChange={handleChange}
          />
          3
          <br />
          <input
            type="radio"
            id="question13-4"
            name="question13"
            value="4"
            onChange={handleChange}
          />
          4
          <br />
          <input
            type="radio"
            id="question13-5"
            name="question13"
            value="5"
            onChange={handleChange}
          />
          5
        </label>
        </form>
        </div>
        <br />
        <div className="question-box">
        <form onSubmit={handleSubmit}>
        <label htmlFor="question14">
          14. Following the previous question, on a scale of 1 to 5, how do you
          feel about these comparisons, generally speaking?
          <br />
          <input
            type="radio"
            id="question14-1"
            name="question14"
            value="1"
            onChange={handleChange}
          />
          1
          <br />
          <input
            type="radio"
            id="question14-2"
            name="question14"
            value="2"
            onChange={handleChange}
          />
          2
          <br />
          <input
            type="radio"
            id="question14-3"
            name="question14"
            value="3"
            onChange={handleChange}
          />
          3
          <br />
          <input
            type="radio"
            id="question14-4"
            name="question14"
            value="4"
            onChange={handleChange}
          />
          4
          <br />
          <input
            type="radio"
            id="question14-5"
            name="question14"
            value="5"
            onChange={handleChange}
          />
          5
        </label>
        </form>
        </div>
        <br />
        <div className="question-box">
        <form onSubmit={handleSubmit}>
        <label htmlFor="question15">
          15. On a scale of 1 to 5, how often do you look to seek validation
          from features of social media?
          <br />
          <input
            type="radio"
            id="question15-1"
            name="question15"
            value="1"
            onChange={handleChange}
          />
          1
          <br />
          <input
            type="radio"
            id="question15-2"
            name="question15"
            value="2"
            onChange={handleChange}
          />
          2
          <br />
          <input
            type="radio"
            id="question15-3"
            name="question15"
            value="3"
            onChange={handleChange}
          />
          3
          <br />
          <input
            type="radio"
            id="question15-4"
            name="question15"
            value="4"
            onChange={handleChange}
          />
          4
          <br />
          <input
            type="radio"
            id="question15-5"
            name="question15"
            value="5"
            onChange={handleChange}
          />
          5
        </label>
        </form>
        </div>
        <br />
        <div className="question-box">
        <form onSubmit={handleSubmit}>
        <label htmlFor="question16">
          16. On a scale of 1 to 5, how frequently does your interest in daily
          activities fluctuate?
          <br />
          <input
            type="radio"
            id="question16-1"
            name="question16"
            value="1"
            onChange={handleChange}
          />
          1
          <br />
          <input
            type="radio"
            id="question16-2"
            name="question16"
            value="2"
            onChange={handleChange}
          />
          2
          <br />
          <input
            type="radio"
            id="question16-3"
            name="question16"
            value="3"
            onChange={handleChange}
          />
          3
          <br />
          <input
            type="radio"
            id="question16-4"
            name="question16"
            value="4"
            onChange={handleChange}
          />
          4
          <br />
          <input
            type="radio"
            id="question16-5"
            name="question16"
            value="5"
            onChange={handleChange}
          />
          5
        </label>
        </form>
        </div>
        <br />
        <div className="question-box">
        <form onSubmit={handleSubmit}>
        <label htmlFor="question17">
          17. On a scale of 1 to 5, how often do you face issues regarding
          sleep?
          <br />
          <input
            type="radio"
            id="question17-1"
            name="question17"
            value="1"
            onChange={handleChange}
          />
          1
          <br />
          <input
            type="radio"
            id="question17-2"
            name="question17"
            value="2"
            onChange={handleChange}
          />
          2
          <br />
          <input
            type="radio"
            id="question17-3"
            name="question17"
            value="3"
            onChange={handleChange}
          />
          3
          <br />
          <input
            type="radio"
            id="question17-4"
            name="question17"
            value="4"
            onChange={handleChange}
          />
          4
          <br />
          <input
            type="radio"
            id="question17-5"
            name="question17"
            value="5"
            onChange={handleChange}
          />
          5
        </label>
        </form>
        </div>
        <br />
        <button type="reset">Clear</button>
        <button type="submit">Submit</button>
      
    </div>
        <Footer/>
    </div>
    
  );
};

export default SurveyForm;
