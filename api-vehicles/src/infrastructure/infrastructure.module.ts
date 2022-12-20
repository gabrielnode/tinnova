import { Module } from '@nestjs/common'
import { VehicleRepository } from '@/infrastructure/repositories'
import { TypeOrmModule } from '@nestjs/typeorm'
import { VehicleEntity } from '@/infrastructure/entities'

@Module({
  imports: [TypeOrmModule.forFeature([VehicleEntity, VehicleRepository])],
  exports: [TypeOrmModule]
})
export class InfrastructureModule {}
