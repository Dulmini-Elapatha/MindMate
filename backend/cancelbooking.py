from flask import Flask, jsonify, request

app = Flask(_name_)


booked_appointments = [
    {"id": 1, "date": "2024-03-25", "time": "10:00 AM", "status": "booked"},
    {"id": 2, "date": "2024-03-26", "time": "11:00 AM", "status": "booked"},
    {"id": 3, "date": "2024-03-27", "time": "12:00 PM", "status": "booked"}
]

@app.route('/cancel', methods=['POST'])
def cancel_appointment():
    data = request.json  
    appointment_id = data.get('appointment_id')

    
    appointment = next((appt for appt in booked_appointments if appt['id'] == appointment_id), None)

    if appointment:
        
        appointment['status'] = 'cancelled'
        return jsonify({'message': 'Appointment cancelled successfully'}), 200
    else:
        return jsonify({'error': 'Appointment not found'}), 404

if _name_ == '_main_':
    app.run(debug=True)