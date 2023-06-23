import * as dotenv from 'dotenv';
dotenv.config();

// Configuration object to hold environment variables

const config = {
    jwt: {
        secret: process.env.JWT_SECRET,
        audience: process.env.JWT_AUDIENCE,
        issuer: process.env.JWT_ISSUER
    },
    port: process.env.PORT || 3000,
    prefix: process.env.JWT_PREFIX || 'api'
}

export default config;
