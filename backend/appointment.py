from flask import Flask, request ,jsonify

app = Flask('Full Calender')

appointments =[]

@app.route('/schedule', methods=['POST'])

def schedule_appointment():
    data = request.json
    if 'date' not in data or 'time' not in data or 'name' not in data:
       return jsonify({'error': 'Missing required fields'}), 400
    
    new_appointment = {
        'name': data['name'],
        'date': data['date'],
        'time': data['time']  
    }
    appointments.append(new_appointment)

    return jsonify({'message': 'Appointment scheduled successfully'}), 201


@app.route('/appointments',methods=['GET'])
def get_all_appointments():
    return jsonify(appointments)

if __name__ =="__main__":
    app.run(debug=True)