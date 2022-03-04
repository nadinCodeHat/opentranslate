import time
from flask import Flask

api = Flask(__name__)

@api.route('/profile')
def my_profile():
    response_body = {
        "name": "Nadin",
        "about" :"Hello World"
    }

    return response_body