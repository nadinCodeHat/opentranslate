from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import *
import tensorflow as tf

api = Flask(__name__)
cors = CORS(api)


@api.route('/translate', methods=['GET', 'POST'])
def translate():
        inputText = request.values.get('inputtext')
        #src = request.values.get('srctext')
        #dst = request.values.get('dsttext')

        model, tokenizer = get_translation_model_and_tokenizer("en", "de")
        inputs = tokenizer.encode(inputText, return_tensors="pt", max_length=512, truncation=True)
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
