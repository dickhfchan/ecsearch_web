view_models = {
    'User': {
        'hidden_columns': ['password', 'wechat_info'],
        'hidden_columns_by_role_not_in': {'roles': ['owner'], 'columns': ['email', 'phone', 'google_id', 'facebook_id', 'wechat_id', 'wechat_info']},
        'owner_id': 'id',
    },
    'Shop': {},
    'Order': {
        'accessible_to': ['customer','merchant']
    },
    'Refund': {
        'query': 'disallowed',
    },
    'Payment': {
        'query': 'disallowed',
    },
}
