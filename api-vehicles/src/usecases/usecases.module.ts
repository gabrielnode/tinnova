import { DynamicModule, Module } from '@nestjs/common'
import { VehicleUsecase } from '@/usecases/vehicle'
import { InfrastructureModule } from '@/infrastructure'
import { VehicleRepository } from '@/infrastructure/repositories'

@Module({
  imports: [InfrastructureModule]
})
export class UsecasesModule {
  static VEHICLE_REPOSITORY = 'VEHICLE_REPOSITORY';
  static register(): DynamicModule {
    
    return {
      module: UsecasesModule,
      providers: [
        {
          provide: VehicleUsecase,
          useClass: VehicleUsecase
        },
        {
          provide: UsecasesModule.VEHICLE_REPOSITORY,
          useExisting: VehicleRepository
        }
      ],
      exports: [VehicleUsecase]
    }
  }
}
