import time
from transformers import *
from flask import Flask

api = Flask(__name__)


@api.route('/profile')
def my_profile():
    response_body = {
        "name": "Nadin",
        "about": "Hello World"
    }

    return response_body

# pipeline api
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
