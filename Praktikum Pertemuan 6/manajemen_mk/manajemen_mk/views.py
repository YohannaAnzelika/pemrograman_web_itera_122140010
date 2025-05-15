from pyramid.view import view_config
from pyramid.response import Response
from .models import DBSession, Matakuliah
import json

def to_dict(mk):
    return {
        'id': mk.id,
        'kode_mk': mk.kode_mk,
        'nama_mk': mk.nama_mk,
        'sks': mk.sks,
        'semester': mk.semester
    }

@view_config(route_name='get_matakuliah', renderer='json', request_method='GET')
def get_all(request):
    data = DBSession.query(Matakuliah).all()
    return [to_dict(mk) for mk in data]

@view_config(route_name='get_matakuliah_id', renderer='json', request_method='GET')
def get_by_id(request):
    mk = DBSession.query(Matakuliah).get(int(request.matchdict['id']))
    return to_dict(mk) if mk else Response(status=404)

@view_config(route_name='create_matakuliah', renderer='json', request_method='POST')
def create(request):
    data = request.json_body
    mk = Matakuliah(
        kode_mk=data['kode_mk'],
        nama_mk=data['nama_mk'],
        sks=data['sks'],
        semester=data['semester']
    )
    DBSession.add(mk)
    return {'message': 'Matakuliah ditambahkan'}

@view_config(route_name='update_matakuliah', renderer='json', request_method='PUT')
def update(request):
    mk = DBSession.query(Matakuliah).get(int(request.matchdict['id']))
    if not mk:
        return Response(status=404)
    data = request.json_body
    mk.kode_mk = data['kode_mk']
    mk.nama_mk = data['nama_mk']
    mk.sks = data['sks']
    mk.semester = data['semester']
    return {'message': 'Matakuliah diperbarui'}

@view_config(route_name='delete_matakuliah', renderer='json', request_method='DELETE')
def delete(request):
    mk = DBSession.query(Matakuliah).get(int(request.matchdict['id']))
    if not mk:
        return Response(status=404)
    DBSession.delete(mk)
    return {'message': 'Matakuliah dihapus'}
