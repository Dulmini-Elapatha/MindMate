from flask import Flask, request, jsonify
import pickle

app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello, World!'

model=pickle.load(open('random_model4.h5','rb'))

def preprocess(df) :

  platforms = ['Facebook','Twitter','Instagram','YouTube','Snapchat','Discord','Reddit','Pinterest','TikTok']
  relationship = ['In a relationship','Single','Married','Divorced']
  occupation = ['University Student','School Student','Salaried Worker','Retired']
  Hours = ['Between 2 and 3 hours','More than 5 hours','Between 1 and 2 hours','Between 3 and 4 hours','Less than an Hour']

  for status in relationship :
    df[status] = df.apply(lambda row: 1 if status.lower() in str(row[df.columns[2]]).lower() else 0, axis=1)

  df['male'] = 0
  df['female'] = 0
  df['other'] = 0

  known_genders = ['male', 'female']

  for index, row in df.iterrows():
      gender = str(row[df.columns[1]]).lower()
      if gender in known_genders:
          df.at[index, gender] = 1
      else:
          df.at[index, 'other'] = 1


  for job in occupation :
    df[job] = df.apply(lambda row: 1 if job.lower() in str(row[df.columns[3]]).lower() else 0, axis=1)

  for platform in platforms:
    df[platform] = df.apply(lambda row: 1 if platform.lower() in str(row[df.columns[5]]).lower() else 0, axis=1)

  hours_values = []


  for response in df[df.columns[6]]:

      if 'Less than an Hour' == response:
          hours_values.append(1)
      elif 'Between 1 and 2 hours' == response:
          hours_values.append(2)
      elif 'Between 2 and 3 hours' == response:
          hours_values.append(3)
      elif 'Between 3 and 4 hours' == response:
          hours_values.append(4)
      elif 'Between 4 and 5 hours' == response:
          hours_values.append(5)
      elif 'More than 5 hours' ==  response:
          hours_values.append(7)
      else:
        hours_values.append(None)

  df['Hours Numerical'] = hours_values

  df['Do you use social media?'] = df['Do you use social media?'].apply(lambda x: 1 if x == 'Yes' else 0)
  df['outcome'] = df['Outcome'].apply(lambda x: 0 if x in [1, 2] else (1 if x == 3 else 2))
  return(df)


def get_prediction_message(prediction):
    messages = {
        0: "Hellooooow, you are doing great. Remember,health care metters too. Take care of yourself and reach out if u need support",
        1: "Hey there, it's okay to have ups and downs in life.. You're doing a great job navigating life's challenges. Remember to give yourself credit for the progress you've made and the strength you've shown. If you ever need to talk or could use some extra support, We are here for you. Keep taking care of yourself ",
        2: "Hey, how are u?, you're not alone.I want you to know that you are doing an excellent job dealing with everything. No matter how small the step seems to be, take pride in each one of them. We are here to help you. Be gentle to yourself and take care of yourself."
    }
    return messages.get(prediction, "Invalid prediction")


@app.route('/predict_mental_health', methods=['POST'])
def predict_mental_health():
    questionnaire_data = request.json
    preprocessing = preprocessing.preprocess(questionnaire_data)
    prediction = model.predict
    prediction_message = get_prediction_message(prediction)
    return jsonify({'prediction': prediction, 'message': prediction_message})

if __name__ == '__main__':
    app.run(debug=True)
