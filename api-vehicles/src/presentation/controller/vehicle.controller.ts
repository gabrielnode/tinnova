import { VehicleDTO, VehicleUpdateDTO } from '@/shared'
import { VehicleUsecase } from '@/usecases/vehicle'
import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common'

@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleUsecase: VehicleUsecase) {}

  @Get('/decade')
  async vehicleByDecade() {
    return await this.vehicleUsecase.getVehicleByDecade()
  }

  @Get('/brand')
  async vehicleByBrand() {
    return await this.vehicleUsecase.getVehicleByBrand()
  }

  @Get('/vehicles-last-week')
  async vehicleLastWeek() {
    return await this.vehicleUsecase.getVehicleLastDate()
  }

  @Get()
  async vehicleFilter(@Query() query: VehicleUpdateDTO) {
    return await this.vehicleUsecase.getVehicle(query)
  }

  @Get()
  async vehicleGetDetails() {
    return await this.vehicleUsecase.getVehicleAll()
  }

  @Patch(':id')
  async vehicleUpdate(@Param('id') id: string, @Body() data: VehicleUpdateDTO) {
    await this.vehicleUsecase.updateVehicle(id, data)
  }

  @Put(':id')
  async vehicleEdit(@Param('id') id: string, @Body() data: VehicleDTO) {
    await this.vehicleUsecase.updateVehicle(id, data)
  }

  @Get(':id')
  async vehicleGetById(@Param('id') id: string) {
    return await this.vehicleUsecase.getVehicleDetails(id)
  }

  @Post()
  async vehicleAdd(@Body() data: VehicleDTO) {
    return await this.vehicleUsecase.addVehicle(data)
  }

  @Delete(':id')
  async vehicleDelete(@Param('id') id: string) {
    return await this.vehicleUsecase.deleteVehicle(id)
  }
}
