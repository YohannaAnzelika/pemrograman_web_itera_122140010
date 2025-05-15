from setuptools import setup

setup(
    name='manajemen_mk',
    install_requires=[
        'pyramid',
        'sqlalchemy',
        'pyramid_jinja2',
        'transaction',
        'zope.sqlalchemy'
    ],
    entry_points={
        'paste.app_factory': [
            'main = manajemen_mk:main'
        ]
    },
)
