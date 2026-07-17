from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.models.user import User
from app.repositories import user_repository

def register_user(
        db:Session,
        data
):

    existing = user_repository.get_user_by_email(
        db,
        data.email
    )

    if existing:
        raise HTTPException(
            status_code=400,
            detail="Email already registered"
        )

    new_user = User(
        name=data.name,
        email=data.email,
        password=data.password
    )

    return user_repository.create_user(
        db,
        new_user
    )

def login_user(
        db:Session,
        data
):

    user = user_repository.get_user_by_email(
        db,
        data.email
    )

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )

    if user.password != data.password:

        raise HTTPException(
            status_code=401,
            detail="Invalid password"
        )

    return user