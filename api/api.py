from flask import Flask, request, jsonify
# from flask_restful import Resource, Api, reqparse
# from transformers import *
# import tensorflow as tf

api = Flask(__name__)

@api.route('/translate', methods=['GET', 'POST'])
def translate():
    data = request.get_json()
    return jsonify(data)
    
# pipeline api
"""
def pipeline_api():
    src = "en"
    dst = "de"

    task_name = f"translation_{src}_to_{dst}"
    model_name = f"Helsinki-NLP/opus-mt-{src}-{dst}"

    translator = pipeline(task_name, model=model_name, tokenizer=model_name)


def get_translation_model_and_tokenizer(src_lang, dst_lang):
    # construct our model name
    model_name = f"Helsinki-NLP/opus-mt-{src}-{dst}"
    # initialize the tokenizer & model
    tokenizer = AutoTokenizer.from_pretrained(model_name)
    model = AutoModelForSeq2SeqLM.from_pretrained(model_name)
    # return them for use
    return model, tokenizer
"""