from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from app.database import get_db
from app.models import User
from app.schema import UserCreate, UserUpdate, LoginRequest



app = FastAPI(title="Practice FastAPI with MySQL")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
       "http://localhost:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/login")
def login(data: LoginRequest, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == data.email).first()

    print("Incoming password:", data.password)
    print("Stored password:", user.password)

    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    if not (data.password == user.password):
        raise HTTPException(status_code=401, detail="Invalid password")

    return {
        "message": "Login successful",
        "name": user.name,
        "email": user.email
    }

# @app.get("/users/")
# def get_all_users(db: Session = Depends(get_db)):
#     return db.query(User).all()

# @app.get("/users/{user_id}")
# def get_user_by_email(user_id: int, db: Session = Depends(get_db)):
#     user = db.query(User).filter(User.id == user_id).first()
#     if user:
#         return user
#     raise HTTPException(status_code=404, detail="User not found")

# @app.post("/users/")
# def create_user(user: UserCreate, db: Session = Depends(get_db)):
#     db_user = User(name=user.name, email=user.email, password=user.password)
#     db.add(db_user)
#     db.commit()
#     db.refresh(db_user)
#     return db_user

# @app.put("/users/{user_id}")
# def update_user_by_email(user_id: int, user: UserUpdate, db: Session = Depends(get_db)):
#     db_user = db.query(User).filter(User.id == user_id).first()
#     if not db_user:
#         raise HTTPException(status_code=404, detail="User not found")
#     db_user.name = user.name
#     db_user.email = user.email
#     db.commit()
#     return {"message": "User updated successfully"}

# @app.delete("/users/{user_id}")
# def delete_user_by_email(user_id: int, db: Session = Depends(get_db)):
#     db_user = db.query(User).filter(User.id == user_id).first()
#     if not db_user:
#         raise HTTPException(status_code=404, detail="User not found")
#     db.delete(db_user)
#     db.commit()
#     return {"message": "User deleted successfully"}
