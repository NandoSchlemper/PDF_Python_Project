from flask import Flask, jsonify, request
from flask_cors import CORS
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)
CORS(app)

@app.route('/pdf_manipulation/upload_pdf', methods=['POST'])
def upload_pdf():
    if 'file' not in request.files:
        return 'Sem PDfs', 400
    
    file = request.files['file']

    if file.filename == '':
        return 'Sem PDfs selecionados', 400
    
    if file and file.filename.endswith('.pdf'):
        filename = secure_filename(file.filename)
        file.save(os.path.join('D:/2. Programacao/ServicesBot/backend/database/PDF/', filename))
        return 'PDF carregado com sucesso!', 200
    return 'Invalid file format', 400

if __name__ == '__main__':
    app.run(debug=True)