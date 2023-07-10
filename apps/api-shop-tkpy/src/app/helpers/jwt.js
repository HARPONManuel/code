const expressJwt = require('express-jwt');

function authJwt() {
    const secret = '@*/*-;:qsd`56cf]µµ>|`f_972@789ze?';
    const api = process.env.API_URL;
    return expressJwt({
        secret,
        algorithms: ['HS256'],
         isRevoked: isRevoked 
    }).unless({
        path: [
/*              { url: /\/public\/uploads(.*)/, methods: ['GET', 'OPTIONS'] },
            { url: /\/api\/v1\/products(.*)/, methods: ['GET', 'OPTIONS'] },
            { url: /\/api\/v1\/categories(.*)/, methods: ['GET', 'OPTIONS'] },
            { url: /\/api\/v1\/orders(.*)/, methods: ['GET', 'OPTIONS', 'POST'] },
            `${api}/users/login`,
            `${api}/users/register` */
            { url: /(.*)/ },
        ]
    });
}

async function isRevoked(req, payload, done) {
    if (!payload.isAdmin) {
        done(null, true);
    }

    done();
}

module.exports = authJwt;
