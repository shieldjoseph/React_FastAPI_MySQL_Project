from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.dependencies.database import get_db
from app.schemas.user import (
    UserRegister,
    UserLogin
)

from app.services import user_service

router = APIRouter(
    prefix="",
    tags=["Users"]
)

@router.post("/register")
def register(
    user:UserRegister,
    db:Session=Depends(get_db)
):

    result = user_service.register_user(
        db,
        user
    )

    return {
        "message":"Registration successful",
        "user":result
    }

@router.post("/login")
def login(
    data:UserLogin,
    db:Session=Depends(get_db)
):

    user = user_service.login_user(
        db,
        data
    )

    return {
        "message":"Login successful",
        "name":user.name,
        "email":user.email
    }