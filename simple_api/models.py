#!/usr/bin/env python
from sqlalchemy import *
from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import Numeric
from sqlalchemy import String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Todo(Base):
	__tablename__ = 'coordinates'
	id = Column(Integer, primary_key=True)
	latitude = Column(Numeric)
   	longitude = Column(Numeric)
   	depth = Column(Integer)

if __name__ == "__main__":
    from sqlalchemy import create_engine
    from settings import DB_URI
    engine = create_engine(DB_URI)
    Base.metadata.drop_all(engine)
    Base.metadata.create_all(engine)
