from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import scoped_session, sessionmaker
import transaction

DBSession = scoped_session(sessionmaker())
Base = declarative_base()

class Matakuliah(Base):
    __tablename__ = 'matakuliah'
    id = Column(Integer, primary_key=True)
    kode_mk = Column(String)
    nama_mk = Column(String)
    sks = Column(Integer)
    semester = Column(Integer)
