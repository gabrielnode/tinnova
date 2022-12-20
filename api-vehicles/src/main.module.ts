import { Module } from '@nestjs/common'
import { PresentationModule } from '@/presentation/presentation.module'
import { UsecasesModule } from '@/usecases/usecases.module'
import { InfrastructureModule } from './infrastructure'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { appConfig, typeOrmConfigSql } from '@/infrastructure/config'
import { TypeOrmModule } from '@nestjs/typeorm'
@Module({
  imports: [
    ConfigModule.forRoot(appConfig()),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: typeOrmConfigSql,
      inject: [ConfigService]
    }),
    InfrastructureModule,
    PresentationModule,
    UsecasesModule
  ],
  controllers: [],
  providers: []
})
export class MainModule {}
