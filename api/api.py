from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import *
import json

api = Flask(__name__)
cors = CORS(api)

@api.route('/translate/post', methods=['POST'])
def recieve():
    data = request.get_json()
    json_str = json.dumps(data)
    resp = json.loads(json_str)
    
    global inputText, src, dst

    inputText = resp['inputText']
    src = resp['srctext']
    dst = resp['dsttext']
    
    return "200 OK"


@api.route('/translate/get', methods=['GET'])
def send():
    model, tokenizer = get_translation_model_and_tokenizer(src, dst)
    inputs = tokenizer.encode(
        inputText, return_tensors="pt", max_length=512, truncation=True)
    greedy_outputs = model.generate(inputs)
    return jsonify(tokenizer.decode(greedy_outputs[0], skip_special_tokens=True))


def get_translation_model_and_tokenizer(src_lang, dst_lang):
    # construct our model name
    model_name = f"Helsinki-NLP/opus-mt-{src_lang}-{dst_lang}"
    # initialize the tokenizer & model
    tokenizer = AutoTokenizer.from_pretrained(model_name)
    model = AutoModelForSeq2SeqLM.from_pretrained(model_name)
    # return them for use
    return model, tokenizer
