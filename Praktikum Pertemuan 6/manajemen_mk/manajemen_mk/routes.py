def includeme(config):
    config.add_route('get_matakuliah', '/matakuliah')
    config.add_route('get_matakuliah_id', '/matakuliah/{id}')
    config.add_route('create_matakuliah', '/matakuliah/create')
    config.add_route('update_matakuliah', '/matakuliah/update/{id}')
    config.add_route('delete_matakuliah', '/matakuliah/delete/{id}')
