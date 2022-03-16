# Open Translate

Neural Machine Translation with React + Hugging Face Transformers

# Setup and installation
## Frontend

- Run ```npm i && npm start``` to start the frontend


## Backend

-  ```cd api```

- Create a virtual environment:

- For Unix based OS:

- ```python3 -m venv venv```

- ```source venv/bin/activate```

- For Windows:

- ```python -m venv venv```

- ```venv\Scripts\activate```

- Install tools and libraries inside venv: ```pip install -r requirements.txt```


## Important

[Pytorch](https://pytorch.org/) needs to be installed in order to execute translation.

Please follow the instructions given: how to [get started](https://pytorch.org/get-started/locally/) with pytorch.
Choose the compute platform carefully, if you have a GPU supported computer choose a CUDA version, if you do not have a GPU choose CPU as the compute platform.

Run the command inside venv and make sure you have [CUDA](https://developer.nvidia.com/cuda-downloads) installed in your computer.


- Run ```npm run start-api``` to start the backend