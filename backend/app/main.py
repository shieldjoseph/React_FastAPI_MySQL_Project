from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from app.controllers import user_controller

app = FastAPI(title="Practice FastAPI with React and MySQL")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
       "http://localhost:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(user_controller.router)