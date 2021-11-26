import { Options, UnderscoreNamingStrategy } from '@mikro-orm/core';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';


const config: Options = {
    metadataProvider: TsMorphMetadataProvider,
    namingStrategy: UnderscoreNamingStrategy,
    entities: ['dist/**/*.entity.js'],
    entitiesTs: ['src/**/*.entity.ts'],
    name: 'noctua-city-pg',
    type: "postgresql",
    dbName: "noctua_city",
    host: "noctua-city-postgres",
    port: 5432,
    user: "noctua_city_pg_user",
    charset: "UTF8",
    password: "noctua_city_pg_pwd",
};

export default config;
