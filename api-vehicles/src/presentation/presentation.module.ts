import { Module } from '@nestjs/common'
import { VehicleController } from '@/presentation/controller'
import { UsecasesModule } from '@/usecases'
@Module({
  imports: [UsecasesModule.register()],
  controllers: [VehicleController]
})
export class PresentationModule {}
