import type { Config } from 'drizzle-kit';

export default {
    schema: './src/orms/drizzle/schema.ts',
    out: './src/orms/drizzle/migrations/',
    driver: 'pg',
    verbose: true,
    dbCredentials: {
        host: process.env.POSTGRES_HOST!!,
        user: process.env.POSTGRES_USER!!,
        password: process.env.POSTGRES_PASSWORD!!,
        database: process.env.POSTGRES_DB!!
    },
} satisfies Config;