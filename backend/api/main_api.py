from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/data')
def get_data():
    return jsonify({'mensagem': 'Olá do backend!'})

@app.route('/api/sum_numbers')
def get_numbers(n1, n2):
    result = n1+n2
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)