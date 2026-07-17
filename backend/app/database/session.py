from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, DeclarativeBase

DATABASE_URL = "mysql+pymysql://root:123456@localhost:3306/os"

engine = create_engine(
    DATABASE_URL,
    echo=True
)
with engine.connect() as conn:
    print("Connected Successfully!")

class Base(DeclarativeBase):
    pass

SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)