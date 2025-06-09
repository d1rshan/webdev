from fastapi import FastAPI

app = FastAPI()

todos = [
    {"id": 1, "task": "Buy groceries", "completed": False},
    {"id": 2, "task": "Walk the dog", "completed": True},
    {"id": 3, "task": "Read a book", "completed": False},
]
@app.get("/")
def lol():
    return {"message": "Hello, World!"}

@app.post("/todos")
def add_todo(todo: dict):
    todo["id"] = len(todos) + 1
    todos.append(todo)
    return todos