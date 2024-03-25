from flask import Flask, jsonify

app = Flask(_name_)


@app.route('/appointments', methods=['GET'])
def get_appointments():

    appointments = [
        {"date": "2024-03-25", "time": "10:00 AM"},
        {"date": "2024-03-26", "time": "11:00 AM"},
        {"date": "2024-03-27", "time": "12:00 PM"}
    ]
    return jsonify(appointments)

if _name_ == '_main_':
    app.run(debug=True)