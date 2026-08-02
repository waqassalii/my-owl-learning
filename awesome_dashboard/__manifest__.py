# -*- coding: utf-8 -*-
{
    'name': "Awesome Dashboard",

    'summary': """
        Starting module for "Discover the JS framework, chapter 2: Build a dashboard"
    """,

    'description': """
        Starting module for "Discover the JS framework, chapter 2: Build a dashboard"
    """,

    'author': "Odoo",
    'website': "https://www.odoo.com/",
    'category': 'Tutorials/AwesomeDashboard',
    'version': '0.1',
    'application': True,
    'installable': True,
    'depends': ['base', 'web', 'mail', 'crm'],

    'data': [
        'views/views.xml',
    ],
    # 'awesome_dashboard/static/src/**/*',
    # 'awesome_dashboard/static/src/dashboard.js',
    # 'awesome_dashboard/static/src/dashboard.xml',
    'assets': {
        # Main Odoo bundle (loads immediately when user opens Odoo)
        'web.assets_backend': [
            'awesome_dashboard/static/src/dashboard_action.js',
        ],
        # Special Lazy Bundle (loads ONLY when opening the dashboard)
        'awesome_dashboard.dashboard': [
            'awesome_dashboard/static/src/dashboard/**/*',
        ],
    },
    'license': 'AGPL-3'
}
