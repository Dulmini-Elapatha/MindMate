# app.py
from flask import Flask, request, jsonify

app = Flask(__name__)

appointments = []

@app.route('/appointments', methods=['POST'])
def create_appointment():
    data = request.json
    appointments.append(data)
    return jsonify({'message': 'Appointment created successfully'}), 201

if __name__ == '__main__':
    app.run(debug=True)
