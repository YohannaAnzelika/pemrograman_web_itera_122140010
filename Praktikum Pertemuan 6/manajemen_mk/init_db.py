from manajemen_mk.models import Base, DBSession
from sqlalchemy import create_engine

engine = create_engine('sqlite:///matakuliah.db')
DBSession.configure(bind=engine)
Base.metadata.create_all(engine)

print("Database berhasil dibuat.")
